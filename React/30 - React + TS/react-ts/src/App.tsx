import { useState } from 'react';
import './App.css';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';

export default function App() {
  const [ todos, setTodos] = useState<Todo[]>([])

  function addTodo(todoText: string) {
    const newTodo = new Todo(todoText)
    setTodos([...todos, newTodo])
  }

  function removeTodo(id: string) {
    setTodos(prev => {
      return prev.filter(todo => todo.id !== id)
    })
  }

  return (
    <div>
      <NewTodo onAddTodo={addTodo}/>
      <Todos items={todos} onRemoveTodo={removeTodo}/>
    </div>
  );
}