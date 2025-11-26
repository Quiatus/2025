import { useState } from "react"

import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Log from "./components/Log";

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X"
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') currentPlayer = "O"
  return currentPlayer
}

export default function App() {
  const [gameTurns, setGameTurns] = useState([])

  const activePlayer = deriveActivePlayer(gameTurns)

  function handleSelectPlayer(rowIndex, colIndex) {
    setGameTurns((prevTurn) => {
      const activePlayer = deriveActivePlayer(prevTurn)
      const updatedTurns = [{square: {row: rowIndex, col: colIndex }, player: activePlayer}, ...prevTurn]

      return updatedTurns
    })
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={activePlayer === "X"}/>
          <Player name="Player 2" symbol="O" isActive={activePlayer === "O"}/>
        </ol>
        <GameBoard onSelectSquare={handleSelectPlayer} turns={gameTurns}/>
      </div>
      <Log turns={gameTurns}/>
    </main>
  )
}