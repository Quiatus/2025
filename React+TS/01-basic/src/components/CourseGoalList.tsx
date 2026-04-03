import CourseGoal from ".//CourseGoal.tsx";
import InfoBox from "./InfoBox.tsx";
import { type CourseGoal as CourseGoalType } from "../App.tsx";
import type { ReactNode } from "react";

type CourseGoalList = {
  goals: CourseGoalType[];
  onDelete: (id: number) => void 
}

export default function CourseGoalList({goals, onDelete }: CourseGoalList) {

  if (goals.length === 0) {
    return <InfoBox mode="hint">No goals yet. Start adding some!</InfoBox>
  }

  let warningBox: ReactNode

  if (goals.length >= 4) {
    warningBox = <InfoBox mode="warning" severity="low">Too many goals. Don't put too much on your plate!</InfoBox>
  }

  return (
    <>
    {warningBox}
    <ul>
      {goals.map(goal => 
        <li key={goal.id}><CourseGoal id={goal.id} title={goal.title} onDelete={onDelete}>{goal.description}</CourseGoal></li>
      )}
    </ul>
    </>
  )
}
