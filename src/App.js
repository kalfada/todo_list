import './App.css';
import Header from './components/Header';
import AddTask from './components/AddTask';
import TasksList from './components/TasksList'

function App() {
  return (
    <div className="App">
      <Header />
      <AddTask />
      <TasksList />
    </div>
  );
}

export default App;
