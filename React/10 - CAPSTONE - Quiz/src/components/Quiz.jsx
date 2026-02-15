import { useCallback, useState } from "react"

import QESTIONS from '../questions.js'
import Question from "./Question.jsx"
import Summary from "./Summary.jsx";

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
    return <Summary userAnswers={userAnswers} />
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
