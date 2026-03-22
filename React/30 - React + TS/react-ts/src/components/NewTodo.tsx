import React, { useRef, useContext } from "react"
import classes from './NewTodo.module.css'
import { TodosContext } from "../store/todos-context"

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext)
  const todoText = useRef<HTMLInputElement>(null)

  function submit(e: React.FormEvent) {
    e.preventDefault()
    const enteredText = todoText.current!.value

    if (enteredText?.trim().length === 0) {
      return
    }

    todosCtx.addTodo(enteredText)
    todoText.current!.value = ''
  }

  return <form onSubmit={submit} className={classes.form}>
    <label htmlFor="">Todo text</label>
    <input type="text" name="" id="text" ref={todoText} />
    <button>Add</button>
  </form>
}

export default NewTodo