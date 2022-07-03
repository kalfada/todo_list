import './App.css';
import Header from './components/Header';
import AddTask from './components/AddTask';
import TasksEditor from './components/TasksEditor'
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
        <TasksEditor />
      </tasksListContext.Provider>
    </div>
  );
}

export default App;
