import './App.css';
import Header from './components/Header';
import AddTask from './components/AddTask';
import TasksList from './components/TasksList'
import { createContext, useEffect, useState } from 'react';

export const tasksListContext = createContext()

function App() {
  const [tasksList, setTasksList] = useState([])

  useEffect(() => {
    setTasksList(JSON.parse(localStorage.getItem('tasksList')) || [])
  }, [])

  return (
    <div className="App">
      <Header />
      <tasksListContext.Provider value={{ tasksList, setTasksList }}>
        <AddTask />
        <TasksList />
      </tasksListContext.Provider>
    </div>
  );
}

export default App;
