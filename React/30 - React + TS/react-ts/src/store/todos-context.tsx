import React, { useState } from "react";
import Todo from "../models/todo"

type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void
}

type Props = {
  children: React.ReactNode
}

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {}
})

const TodosContextProvider: React.FC<Props> = (props) => {
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

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodo,
    removeTodo: removeTodo
  }

  return <TodosContext.Provider value={contextValue}>
    {props.children}
  </TodosContext.Provider>
}

export default TodosContextProvider