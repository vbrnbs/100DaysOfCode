import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

// Hosted at:
// https://merry-duckanoo-9d6225.netlify.app/

function App() {
  return (
    <div className="todo-app">
      <TodoList />
    </div>
  );
}

export default App;
