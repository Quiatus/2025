import CourseGoalList from "./components/CourseGoalList.tsx";
import Header from "./components/Header.tsx";
import NewGoal from "./components/newGoal.tsx";
import goalsImg from './assets/goals.jpg'
import { useState } from "react";

export type CourseGoal = {
  title: string;
  description: string;
  id: number
}

function getRandomId(): number {
  return Math.ceil(Math.random() * (1e10 - 1e9) + 1e9)
}

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([])

  function addGoalhandler(goal: string, summary: string) {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        id: getRandomId(),
        title: goal,
        description: summary
      }
      return [...prevGoals, newGoal]
    })
  }

  function deleteGoalHandler(id: number) {
    setGoals(prevGoals => prevGoals.filter((goal) => goal.id !== id))
  }

  return <main>
    <Header image={{ src: goalsImg, alt: 'A list of goals'}}>
      Your course goal
    </Header>
    <NewGoal onAddGoal={addGoalhandler} />
    <CourseGoalList goals={goals} onDelete={deleteGoalHandler} />
  </main>;
}
