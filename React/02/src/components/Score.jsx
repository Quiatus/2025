import "./Score.css"

export default function Score({ score }) {
  return (
    <div id="score">
      <p>{score[0]}</p>
      <p>-</p>
      <p>{score[1]}</p>
    </div>
  )
}
