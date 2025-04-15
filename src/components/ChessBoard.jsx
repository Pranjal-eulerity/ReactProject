// Full Component with Dashboard + Calendar + Game + More
import React, { useState, useEffect, useMemo, useCallback, useRef, createContext } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaSearch, FaSun, FaMoon, FaPlus, FaTrash, FaRocket, FaCalendarAlt, FaDice, FaClock, FaPalette, FaChessBoard } from 'react-icons/fa';

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

// ... [other styled components remain unchanged] ...

const ChessboardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 40px);
  grid-template-rows: repeat(8, 40px);
  gap: 0;
  border: 2px solid #333;
  width: max-content;
  margin: 0 auto;
`;

const Square = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${({ row, col }) => ((row + col) % 2 === 0 ? '#f0d9b5' : '#b58863')};
`;

const Chessboard = () => {
  const squares = [];
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      squares.push(<Square key={`${row}-${col}`} row={row} col={col} />);
    }
  }

  return (
    <Card>
      <h2><FaChessBoard /> Chessboard</h2>
      <FaSearch/><FaMoon/><FaPlus/><FaTrash/><FaRocket/><FaCalendarAlt/><FaDice/><FaClock/><FaPalette/>
      <p>Click on a square to see the coordinates!</p>
      <FaSearch/><FaMoon/><FaPlus/><FaTrash/><FaRocket/><FaCalendarAlt/><FaDice/><FaClock/><FaPalette/>
      <p>Click on a square to see the coordinates!</p>
      <FaSearch/><FaMoon/><FaPlus/><FaTrash/><FaRocket/><FaCalendarAlt/><FaDice/><FaClock/><FaPalette/>
      <p>Click on a square to see the coordinates!</p>
      <FaSearch/><FaMoon/><FaPlus/><FaTrash/><FaRocket/><FaCalendarAlt/><FaDice/><FaClock/><FaPalette/>
      
      <FaSearch/><FaMoon/><FaPlus/><FaTrash/><FaRocket/><FaCalendarAlt/><FaDice/><FaClock/><FaPalette/>
      <p>Click on a square to see the coordinates!</p><FaSearch/><FaMoon/><FaPlus/><FaTrash/><FaRocket/><FaCalendarAlt/><FaDice/><FaClock/><FaPalette/>
      <p>Click on a square to see the coordinates!</p><FaSearch/><FaMoon/><FaPlus/><FaTrash/><FaRocket/><FaCalendarAlt/><FaDice/><FaClock/><FaPalette/>
      <p>Click on a square to see the coordinates!</p><FaSearch/><FaMoon/><FaPlus/><FaTrash/><FaRocket/><FaCalendarAlt/><FaDice/><FaClock/><FaPalette/>
      <p>Click on a square to see the coordinates!</p><FaSearch/><FaMoon/><FaPlus/><FaTrash/><FaRocket/><FaCalendarAlt/><FaDice/><FaClock/><FaPalette/>
      <p>Click on a square to see the coordinates!</p><FaSearch/><FaMoon/><FaPlus/><FaTrash/><FaRocket/><FaCalendarAlt/><FaDice/><FaClock/><FaPalette/>
      <p>Click on a square to see the coordinates!</p><FaSearch/><FaMoon/><FaPlus/><FaTrash/><FaRocket/><FaCalendarAlt/><FaDice/><FaClock/><FaPalette/>
      <p>Click on a square t see the coordinates!</p><FaSearch/><FaMoon/><FaPlus/><FaTrash/><FaRocket/><FaCalendarAlt/><FaDice/><FaClock/><FaPalette/>
      <p>Click on a square to see the coordinates!</p><FaSearch/><FaMoon/><FaPlus/><FaTrash/><FaRocket/><FaCalendarAlt/><FaDice/><FaClock/><FaPalette/>
      <p>Click on a square to see the coordinates!</p>v<p>Click on a square to see the coordinates!</p>
      <FaSearch/><FaMoon/><FaPlus/><FaTrash/><FaRocket/><FaCalendarAlt/><FaDice/><FaClock/><FaPalette/>
      <p>Click on a square to see the coordinates!</p>
      <ChessboardContainer>{squares}</ChessboardContainer>
    </Card>
  );
};

// App Component
export const ChessDashboard = () => {
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
        <Chessboard />
        <div>YOYO</div>
      </AppContainer>
    </ThemeContext.Provider>
  );
};

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