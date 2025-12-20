import { useState } from "react";
import Header from "./components/Header";
import Quiz from "./components/Quiz";

function App() {
  const [start, setStart] = useState(false)

  function handleStartQuiz() {
    setStart(true)
  }

  return (
    <>
      <Header />
      <main>
        {start 
        ? <Quiz />
        : <div  className="start">
            <button onClick={handleStartQuiz}>Start Quiz</button>
          </div> }
      </main>
    </>
    
  )
}

export default App;
