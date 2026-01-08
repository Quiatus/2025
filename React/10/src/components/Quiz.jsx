import { useCallback, useState } from "react"

import QESTIONS from '../questions.js'
import quizComplete from '../assets/quiz-complete.png'
import Question from "./Question.jsx"

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([])

  const activeQuestiuonIndex = userAnswers.length;
  const quizCompleted = activeQuestiuonIndex === QESTIONS.length

  const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((prevState) => {
      return [...prevState, selectedAnswer]
    })
  }, [])

  const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer])

  if (quizCompleted) {
    return <div id="summary">
      <img src={quizComplete} alt="Quiz Completed" />
      <h2>Quiz Completed!</h2>
    </div>
  } 

  return (
    <div id="quiz">
      <Question 
        key={activeQuestiuonIndex}
        index={activeQuestiuonIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  )
}
