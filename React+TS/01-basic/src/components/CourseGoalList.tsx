import CourseGoal from ".//CourseGoal.tsx";
import { type CourseGoal as CourseGoalType } from "../App.tsx";

type CourseGoalList = {
  goals: CourseGoalType[]
}

export default function CourseGoalList({goals}: CourseGoalList) {
  return (
    <ul>
      {goals.map(goal => 
        <li key={goal.id}><CourseGoal title={goal.title}>{goal.description}</CourseGoal></li>
      )}
    </ul>
  )
}
