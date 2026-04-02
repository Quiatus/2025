import CourseGoal from ".//CourseGoal.tsx";
import { type CourseGoal as CourseGoalType } from "../App.tsx";

type CourseGoalList = {
  goals: CourseGoalType[];
  onDelete: (id: number) => void 
}

export default function CourseGoalList({goals, onDelete }: CourseGoalList) {
  return (
    <ul>
      {goals.map(goal => 
        <li key={goal.id}><CourseGoal id={goal.id} title={goal.title} onDelete={onDelete}>{goal.description}</CourseGoal></li>
      )}
    </ul>
  )
}
