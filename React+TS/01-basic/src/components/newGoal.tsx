import { useRef, type SubmitEvent } from "react"

type NewGoalProps = {
  onAddGoal: (goal: string, summary: string) => void
}

export default function NewGoal({ onAddGoal }: NewGoalProps) {
  const goal = useRef<HTMLInputElement>(null)
  const summary = useRef<HTMLInputElement>(null)

  function formSubmitHandler(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault()

    const enteredGoal = goal.current!.value
    const enteredSummary = summary.current!.value

    if(!enteredGoal || !enteredSummary) {
      return
    }

    e.currentTarget.reset()
    onAddGoal(enteredGoal, enteredSummary)
  }

  return (
    <form onSubmit={formSubmitHandler}>  
      <p>
        <label htmlFor="goal">Your goal</label>
        <input type="text" ref={goal} id="goal" />
      </p>
      <p>
        <label htmlFor="summary">Short summary</label>
        <input type="text" ref={summary} id="summary" />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  )
}
