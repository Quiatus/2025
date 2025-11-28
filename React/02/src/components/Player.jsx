import { useState } from "react";
import "./Player.css"

export default function Player({ name, symbol, isActive, onChangeName }) {
  const [ playerName, setPlayerName ] = useState(name)
  const [ isEditing, setIsEditing] = useState(false);

  function handleEditing() {
    setIsEditing((editing) => !editing)
    if (isEditing) onChangeName(symbol, playerName)
  }

  function handleChange(e) {
    setPlayerName(e.target.value)
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEditing ? <input type="text" required value={playerName} onChange={handleChange}></input> : <span className="player-name">{playerName}</span>}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditing}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  )
}
