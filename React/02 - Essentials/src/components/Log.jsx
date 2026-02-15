import "./Log.css"

export default function Log({ turns, players }) {
  return (
    <ol id="log">
      {turns.map(turn => 
        <li key={`${turn.square.row}${turn.square.col}`}>
          {turn.player === "X" ? players.X : players.O} selected {turn.square.row + 1},{turn.square.col + 1}
        </li>)}
    </ol>
  )
}
