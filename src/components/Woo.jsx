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

const ColorBoxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  margin-top: 20px;
`;

const ColorBox = styled.div`
  height: 100px;
  border-radius: 10px;
  background: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: bold;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;

const ColorfulDivs = () => {
  const colors = ['#e63946', '#f1fa8c', '#50fa7b', '#8be9fd', '#bd93f9', '#ff79c6', '#ffb86c', '#ff5555', '#6272a4', '#282a36'];
  return (
    <Card>
      <h2>🎨 Colorful Divs</h2>
      <ColorBoxContainer>
        {colors.map((color, index) => (
          <ColorBox key={index} color={color}>{color}</ColorBox>
        ))}
      </ColorBoxContainer>
    </Card>
  );
};

// ... rest of existing components and styles ...

// App Component
export const Woo = () => {
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
        <ColorfulDivs />
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
