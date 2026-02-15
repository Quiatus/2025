import { useState } from "react"

import Header from "./components/Header"
import UserInputs from "./components/UserInputs"
import Results from "./components/Results"

import { calculateInvestmentResults } from "./util/investment" 

export default function App() {
  const [vals, setVals] = useState({initialInvestment: "", annualInvestment: "", expectedReturn: "", duration: ""})

  let results

  function handleChange(val, id) {
    setVals(prevValues => {
      return {...prevValues, [id]: Number(val)}
    })
  }

  if (vals.initialInvestment && vals.annualInvestment && vals.expectedReturn && vals.duration) {
    results = calculateInvestmentResults(vals)
  }

  return (
    <>
      <Header />
      <main>
        <UserInputs values={vals} onUpdate={handleChange} />
        {results && <Results results={results} />}
      </main>
    </>
  )
}


