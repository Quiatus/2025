import CourseGoalList from "./components/CourseGoalList.tsx";
import Header from "./components/Header.tsx";
import goalsImg from './assets/goals.jpg'
import { useState } from "react";

export type CourseGoal = {
  title: string;
  description: string;
  id: number
}

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([])

  function addGoalhandler() {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        id: Math.ceil(Math.random() * (1e10 - 1e9) + 1e9),
        title: 'Learn TS',
        description: 'Inh depth'
      }
      return [...prevGoals, newGoal]
    })
  }

  return <main>
    <Header image={{ src: goalsImg, alt: 'A list of goals'}}>
      Your course goal
    </Header>
    <button onClick={addGoalhandler}>Add Goal</button>
    <CourseGoalList goals={goals}/>
  </main>;
}
