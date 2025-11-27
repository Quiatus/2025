import { useState } from "react"

import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Log from "./components/Log";
import { WINNING_COMBINATIONS, INITIAL_GAME_BOARD } from "./consts";

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X"
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') currentPlayer = "O"
  return currentPlayer
}

export default function App() {
  const [gameTurns, setGameTurns] = useState([])
  const activePlayer = deriveActivePlayer(gameTurns)
  let gameBoard = INITIAL_GAME_BOARD;
  let winner

  for (const turn of gameTurns) {
    const { square, player } = turn
    const { row, col } = square
    gameBoard[row][col] = player
  }

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column]
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column]
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column]

    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
      winner = firstSquareSymbol
    }
  }

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
        {winner && <p>You won, {winner}!</p>}
        <GameBoard onSelectSquare={handleSelectPlayer} board={gameBoard}/>
      </div>
      <Log turns={gameTurns}/>
    </main>
  )
}