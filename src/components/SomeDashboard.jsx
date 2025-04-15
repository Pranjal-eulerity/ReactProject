// Full Component with Dashboard + Calendar + Game + More
import React, { useState, useEffect, useMemo, useCallback, useRef, createContext } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaSearch, FaSun, FaMoon, FaPlus, FaTrash, FaRocket, FaCalendarAlt, FaDice, FaClock, FaPalette } from 'react-icons/fa';
import { DiceGame } from './Calendar';

const ThemeContext = createContext();

const AppContainer = styled.div`
  background-color: ${({ theme }) => (theme === 'dark' ? '#111' : '#f5f5f5')};
  color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#111')};
  min-height: 100vh;
  padding: 20px;
  transition: all 0.3s ease;
`;

const Card = styled(motion.div)`
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
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

const QuoteBox = styled.div`
  font-style: italic;
  font-size: 18px;
  padding: 16px;
  border-left: 4px solid #6c63ff;
  margin-top: 20px;
`;

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

const ClockWidget = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Card>
      <h2><FaClock /> Live Clock</h2>
      <h3 style={{ fontSize: '2rem' }}>{time}</h3>
    </Card>
  );
};

const ThemePalette = () => {
  const [active, setActive] = useState("Default");

  const handleThemeClick = (theme) => {
    setActive(theme);
    alert(`Pretend we applied the ${theme} theme! 🌈`);
  };

  return (
    <Card>
      <h2><FaPalette /> Theme Palette</h2>
      <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
        {['Default', 'Ocean', 'Forest', 'Sunset'].map((t) => (
          <Button key={t} onClick={() => handleThemeClick(t)}>{t}</Button>
        ))}
      </div>
    </Card>
  );
};

// App Component
export const AdvancedDashboard = () => {
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
        <ClockWidget />
        <ThemePalette />
        <DiceGame />
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
        </Card><Card>
          <h2>Task List</h2>
          <TaskList>
            {filteredTasks.map((task) => (
              <TaskItem key={task.id}>
                {task.text}
                <Button onClick={() => deleteTask(task.id)}><FaTrash /></Button>
              </TaskItem>
            ))}
          </TaskList>
        </Card><Card>
          <h2>Task List</h2>
          <TaskList>
            {filteredTasks.map((task) => (
              <TaskItem key={task.id}>
                {task.text}
                <Button onClick={() => deleteTask(task.id)}><FaTrash /></Button>
              </TaskItem>
            ))}
          </TaskList>
        </Card><Card>
          <h2>Task List</h2>
          <TaskList>
            {filteredTasks.map((task) => (
              <TaskItem key={task.id}>
                {task.text}
                <Button onClick={() => deleteTask(task.id)}><FaTrash /></Button>
              </TaskItem>
            ))}
          </TaskList>
        </Card><Card>
          <h2>Task List</h2>
          <TaskList>
            {filteredTasks.map((task) => (
              <TaskItem key={task.id}>
                {task.text}
                <Button onClick={() => deleteTask(task.id)}><FaTrash /></Button>
              </TaskItem>
            ))}
          </TaskList>
        </Card><Card>
          <h2>Task List</h2>
          <TaskList>
            {filteredTasks.map((task) => (
              <TaskItem key={task.id}>
                {task.text}
                <Button onClick={() => deleteTask(task.id)}><FaTrash /></Button>
              </TaskItem>
            ))}
          </TaskList>
        </Card><Card>
          <h2>Task List</h2>
          <TaskList>
            {filteredTasks.map((task) => (
              <TaskItem key={task.id}>
                {task.text}
                <Button onClick={() => deleteTask(task.id)}><FaTrash /></Button>
              </TaskItem>
            ))}
          </TaskList>
        </Card><Card>
          <h2>Task List</h2>
          <TaskList>
            {filteredTasks.map((task) => (
              <TaskItem key={task.id}>
                {task.text}
                <Button onClick={() => deleteTask(task.id)}><FaTrash /></Button>
              </TaskItem>
            ))}
          </TaskList>
        </Card><Card>
          <h2>Task List</h2>
          <TaskList>
            {filteredTasks.map((task) => (
              <TaskItem key={task.id}>
                {task.text}
                <Button onClick={() => deleteTask(task.id)}><FaTrash /></Button>
              </TaskItem>
            ))}
          </TaskList>
        </Card><Card>
          <h2>Task List</h2>
          <TaskList>
            {filteredTasks.map((task) => (
              <TaskItem key={task.id}>
                {task.text}
                <Button onClick={() => deleteTask(task.id)}><FaTrash /></Button>
              </TaskItem>
            ))}
          </TaskList>
        </Card><Card>
          <h2>Task List</h2>
          <TaskList>
            {filteredTasks.map((task) => (
              <TaskItem key={task.id}>
                {task.text}
                <Button onClick={() => deleteTask(task.id)}><FaTrash /></Button>
              </TaskItem>
            ))}
          </TaskList>
        </Card><Card>
          <h2>Task List</h2>
          <TaskList>
            {filteredTasks.map((task) => (
              <TaskItem key={task.id}>
                {task.text}
                <Button onClick={() => deleteTask(task.id)}><FaTrash /></Button>
              </TaskItem>
            ))}
          </TaskList>
        </Card><Card>
          <h2>Task List</h2>
          <TaskList>
            {filteredTasks.map((task) => (
              <TaskItem key={task.id}>
                {task.text}
                <Button onClick={() => deleteTask(task.id)}><FaTrash /></Button>
              </TaskItem>
            ))}
          </TaskList>
        </Card><Card>
          <h2>Task List</h2>
          <TaskList>
            {filteredTasks.map((task) => (
              <TaskItem key={task.id}>
                {task.text}
                <Button onClick={() => deleteTask(task.id)}><FaTrash /></Button>
              </TaskItem>
            ))}
          </TaskList>
        </Card><Card>
          <h2>Task List</h2>
          <TaskList>
            {filteredTasks.map((task) => (
              <TaskItem key={task.id}>
                {task.text}
                <Button onClick={() => deleteTask(task.id)}><FaTrash /></Button>
              </TaskItem>
            ))}
          </TaskList>
        </Card><Card>
          <h2>Task List</h2>
          <TaskList>
            {filteredTasks.map((task) => (
              <TaskItem key={task.id}>
                {task.text}
                <Button onClick={() => deleteTask(task.id)}><FaTrash /></Button>
              </TaskItem>
            ))}
          </TaskList>
        </Card><Card>
          <h2>Task List</h2>
          <TaskList>
            {filteredTasks.map((task) => (
              <TaskItem key={task.id}>
                {task.text}
                <Button onClick={() => deleteTask(task.id)}><FaTrash /></Button>
              </TaskItem>
            ))}
          </TaskList>
        </Card><Card>
          <h2>Task List</h2>
          <TaskList>
            {filteredTasks.map((task) => (
              <TaskItem key={task.id}>
                {task.text}
                <Button onClick={() => deleteTask(task.id)}><FaTrash /></Button>
              </TaskItem>
            ))}
          </TaskList>
        </Card><Card>
          <h2>Task List</h2>
          <TaskList>
            {filteredTasks.map((task) => (
              <TaskItem key={task.id}>
                {task.text}
                <Button onClick={() => deleteTask(task.id)}><FaTrash /></Button>
              </TaskItem>
            ))}
          </TaskList>
        </Card><Card>
          <h2>Task List</h2>
          <TaskList>
            {filteredTasks.map((task) => (
              <TaskItem key={task.id}>
                {task.text}
                <Button onClick={() => deleteTask(task.id)}><FaTrash /></Button>
              </TaskItem>
            ))}
          </TaskList>
        </Card><Card>
          <h2>Task List</h2>
          <TaskList>
            {filteredTasks.map((task) => (
              <TaskItem key={task.id}>
                {task.text}
                <Button onClick={() => deleteTask(task.id)}><FaTrash /></Button>
              </TaskItem>
            ))}
          </TaskList>
        </Card><Card>
          <h2>Task List</h2>
          <TaskList>
            {filteredTasks.map((task) => (
              <TaskItem key={task.id}>
                {task.text}
                <Button onClick={() => deleteTask(task.id)}><FaTrash /></Button>
              </TaskItem>
            ))}
          </TaskList>
        </Card><Card>
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
      </AppContainer>
    </ThemeContext.Provider>
  );
};

// The CustomCalendar and DiceGame components remain unchanged below this point.
