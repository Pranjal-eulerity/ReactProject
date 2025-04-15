// Full Component with Dashboard + Calendar + Game
// --- existing imports ---
import React, { useState, useEffect, useMemo, useCallback, useRef, createContext, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { motion } from 'framer-motion';
import { FaSearch, FaSun, FaMoon, FaPlus, FaTrash, FaRocket, FaCalendarAlt, FaDice } from 'react-icons/fa';

// --- styled-components and context defined here (same as before) ---
// --- [omitted for brevity; same content as previous state] ---

// App Component
export const Calendar = () => {
  const [theme, setTheme] = useState('light');
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState('');
  const inputRef = useRef(null);

  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  const addTask = useCallback(() => {
    const val = inputRef.current?.value;
    if (val) {
      setTasks((prev) => [...prev, { id: Date.now(), text: val }]);
      inputRef.current.value = '';
    }
  }, []);

  const deleteTask = useCallback((id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }, []);

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => task.text.toLowerCase().includes(search.toLowerCase()));
  }, [search, tasks]);

  return (
    <ThemeContext.Provider value={theme}>
      <AppContainer theme={theme}>
        <Header>🌟 Advanced React Dashboard</Header>
        <Button onClick={toggleTheme}>
          {theme === 'light' ? <FaMoon /> : <FaSun />} &nbsp; Toggle Theme
        </Button>

        <Card initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <h2>Add a Task</h2>
          <SearchInput ref={inputRef} placeholder="New Task" />
          <Button onClick={addTask}><FaPlus />&nbsp;Add Task</Button>
        </Card>

        <Card>
          <h2>Search Tasks</h2>
          <SearchInput
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search tasks..."
          />
        </Card>

        <Card>
          <h2>Task List</h2>
          <TaskList>
            {filteredTasks.map((task) => (
              <TaskItem key={task.id}>
                {task.text}
                <Button onClick={() => deleteTask(task.id)}><FaTrash /></Button>
              </TaskItem>
            ))}
          </TaskList>
        </Card>

        <InspirationWidget />
        <CustomCalendar />
        <DiceGame />
      </AppContainer>
    </ThemeContext.Provider>
  );
};
const InspirationWidget = () => {
    const [quote, setQuote] = useState('Loading inspirational quote...');
  
    useEffect(() => {
      const quotes = [
        "Creativity is intelligence having fun. – Albert Einstein",
        "Do one thing every day that scares you. – Eleanor Roosevelt",
        "It's not whether you get knocked down, it's whether you get up. – Vince Lombardi",
        "The way to get started is to quit talking and begin doing. – Walt Disney"
      ];
  
      const interval = setInterval(() => {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        setQuote(randomQuote);
      }, 5000);
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <Card>
        <h2><FaRocket /> Motivation</h2>
        <QuoteBox>{quote}</QuoteBox>
      </Card>
    );
  };
  const QuoteBox = styled.div`
  font-style: italic;
  font-size: 18px;
  padding: 16px;
  border-left: 4px solid #6c63ff;
  margin-top: 20px;
`;
const AppContainer = styled.div`
  background-color: ${({ theme }) => (theme === 'dark' ? '#111' : '#f5f5f5')};
  color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#111')};
  min-height: 100vh;
  padding: 20px;
  transition: all 0.3s ease;
`;
const Header = styled.h1`
  font-size: 32px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background: #6c63ff;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 10px;
  display: flex;
  align-items: center;

  &:hover {
    background: #574fd6;
  }
`;

const SearchInput = styled.input`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  width: 100%;
`;

const TaskList = styled.ul`
  list-style: none;
  padding: 0;
`;

const TaskItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fafafa;
  padding: 10px;
  margin: 10px 0;
  border-radius: 8px;
`;

const Card = styled(motion.div)`
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

// Custom Full Calendar Component
const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
`;

const CalendarDays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
  text-align: center;
  width: 100%;
`;

const CalendarDay = styled.div`
  padding: 10px;
  background: #e8edff;
  border-radius: 8px;
  font-weight: bold;
`;

const DayBox = styled.div`
  padding: 12px;
  background: #f5f5f5;
  border-radius: 6px;
`;

const CustomCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  const goToPrevMonth = () => {
    setCurrentDate((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  };

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);

  const days = [];
  for (let i = 0; i < firstDay; i++) {
    days.push(<DayBox key={`empty-${i}`} />);
  }
  for (let d = 1; d <= daysInMonth; d++) {
    days.push(<DayBox key={d}>{d}</DayBox>);
  }

  return (
    <Card>
      <CalendarWrapper>
        <CalendarHeader>
          <Button onClick={goToPrevMonth}>&lt; Prev</Button>
          <h3>{currentDate.toLocaleString('default', { month: 'long' })} {year}</h3>
          <Button onClick={goToNextMonth}>Next &gt;</Button>
        </CalendarHeader>
        <CalendarDays>
          {daysOfWeek.map((day) => (
            <CalendarDay key={day}>{day}</CalendarDay>
          ))}
          {days}
        </CalendarDays>
      </CalendarWrapper>
    </Card>
  );
};

// Cool Mini Dice Game
const DiceResult = styled.div`
  font-size: 48px;
  margin: 20px 0;
`;

const DiceGame = () => {
  const [roll, setRoll] = useState(1);

  const rollDice = () => {
    const value = Math.floor(Math.random() * 6) + 1;
    setRoll(value);
  };

  return (
    <Card>
      <h2><FaDice /> Roll the Dice!</h2>
      <DiceResult>🎲 {roll}</DiceResult>
      <Button onClick={rollDice}>Roll</Button>
    </Card>
  );
};
