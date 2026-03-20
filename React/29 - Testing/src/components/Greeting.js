import { useState } from "react"

export default function Greeting() {
  const [ text, setText ] = useState(false)

  function changeText() {
    setText(true)
  }

  return (
    <div>
      <h2>Hello</h2>
      <p>It's {text ? 'not' : ''} nice to see you</p>
      <button onClick={changeText}>Click!</button>
    </div>
  )
}
