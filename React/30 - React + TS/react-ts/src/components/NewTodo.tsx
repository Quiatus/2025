import React, { useRef } from "react"
import classes from './NewTodo.module.css'

const NewTodo: React.FC<{ onAddTodo: (text: string ) => void }> = (props) => {
  const todoText = useRef<HTMLInputElement>(null)

  function submit(e: React.FormEvent) {
    e.preventDefault()
    const enteredText = todoText.current!.value

    if (enteredText?.trim().length === 0) {
      return
    }

    props.onAddTodo(enteredText)
    todoText.current!.value = ''
  }

  return <form onSubmit={submit} className={classes.form}>
    <label htmlFor="">Todo text</label>
    <input type="text" name="" id="text" ref={todoText} />
    <button>Add</button>
  </form>
}

export default NewTodo