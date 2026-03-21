import './App.css';
import Todos from './components/Todos';
import Todo from './models/todo';

export default function App() {
  const todos = [
    new Todo('Learn React'),
    new Todo('Learn TS')
  ]

  return (
    <div>
      <Todos items={todos} />
    </div>
  );
}