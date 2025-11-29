import { useState } from "react"

import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Log from "./components/Log";
import GameOver from "./components/GameOver";
import Score from "./components/Score";
import { WINNING_COMBINATIONS, INITIAL_GAME_BOARD, PLAYERS } from "./consts";

let score = [0, 0]

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X"
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') currentPlayer = "O"
  return currentPlayer
}

function deriveWinner(gameBoard) {
  let winnerSymbol
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column]
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column]
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column]

    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
      winnerSymbol = firstSquareSymbol
      firstSquareSymbol === "X" ? score[0]++ : score[1]++
    }
  }

  return winnerSymbol
}

function deriveGameBoard(gameTurns) {
   let gameBoard = [...INITIAL_GAME_BOARD.map((arr) => [...arr])];
     for (const turn of gameTurns) {
    const { square, player } = turn
    const { row, col } = square
    gameBoard[row][col] = player
  }

  return gameBoard
}

export default function App() {
  const [players, setPlayers] = useState(PLAYERS)
  const [gameTurns, setGameTurns] = useState([])

  const activePlayer = deriveActivePlayer(gameTurns)
  let gameBoard = deriveGameBoard(gameTurns)
  const winnerSymbol = deriveWinner(gameBoard)
  const winnerName = winnerSymbol ? players[winnerSymbol] : undefined;
  
  const hasDraw = gameTurns.length === 9 && !winnerName;

  function handleSelectPlayer(rowIndex, colIndex) {
    setGameTurns((prevTurn) => {
      const activePlayer = deriveActivePlayer(prevTurn)
      const updatedTurns = [{square: {row: rowIndex, col: colIndex }, player: activePlayer}, ...prevTurn]

      return updatedTurns
    })
  }

  function handleRematch() {
    setGameTurns([])
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers(prevPlayers => {
      return {
        ...prevPlayers,
        [symbol]: newName
      }
    })
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name={PLAYERS.X} symbol="X" isActive={activePlayer === "X"} onChangeName={handlePlayerNameChange}/>
          <Player name={PLAYERS.O} symbol="O" isActive={activePlayer === "O"} onChangeName={handlePlayerNameChange}/>
        </ol>
        <Score score={score}/>
        {(winnerName || hasDraw) && <GameOver winner={winnerName} onRestart={handleRematch}/>}
        <GameBoard onSelectSquare={handleSelectPlayer} board={gameBoard}/>
      </div>
      <Log turns={gameTurns} players={players}/>
    </main>
  )
}