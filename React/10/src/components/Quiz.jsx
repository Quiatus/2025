import { useState } from "react"

import QESTIONS from '../questions.js'

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([])

  const activeQuestiuonIndex = userAnswers.length

  function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((prevState) => {
      return [...prevState, selectedAnswer]
    })
  }

  return (
    <div id="quiz">
      <div id="question">
        <h2>{QESTIONS[activeQuestiuonIndex].text}</h2>
        <ul id="answers">
          {QESTIONS[activeQuestiuonIndex].answers.map(answer => 
            <li key={answer} className="answer">
              <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
            </li>)}
        </ul>
      </div>
    </div>
  )
}
