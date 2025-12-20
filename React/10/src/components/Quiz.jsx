import { useCallback, useState } from "react"

import QuestionTimer from "./QuestionTimer.jsx"
import QESTIONS from '../questions.js'
import quizComplete from '../assets/quiz-complete.png'

const TIMER = 5000

export default function Quiz() {
  const [answerState, setAnswerState] = useState('')
  const [userAnswers, setUserAnswers] = useState([])

  const activeQuestiuonIndex = userAnswers.length
  const quizCompleted = activeQuestiuonIndex === QESTIONS.length

  const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
    setAnswerState('answered')
    setUserAnswers((prevState) => {
      return [...prevState, selectedAnswer]
    })

    setTimeout(() => {
      if (selectedAnswer === QESTIONS[activeQuestiuonIndex].answers[0]) {
        console.log('corfrfect')
      }
    }, 1000)
  }, [])

  const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer])

  if (quizCompleted) {
    return <div id="summary">
      <img src={quizComplete} alt="Quiz Completed" />
      <h2>Quiz Completed!</h2>
    </div>
  } 

  const shuffledAnswers = [...QESTIONS[activeQuestiuonIndex].answers]
  shuffledAnswers.sort(() => Math.random() - 0.5)

  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer 
          key={activeQuestiuonIndex}
          timeout={TIMER} 
          onTimeout={handleSkipAnswer}
        />
        <h2>{QESTIONS[activeQuestiuonIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map(answer => 
            <li key={answer} className="answer">
              <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
            </li>)}
        </ul>
      </div>
    </div>
  )
}
