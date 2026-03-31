import CourseGoal from "./components/CourseGoal.tsx";
import Header from "./components/Header.tsx";
import goalsImg from './assets/goals.jpg'

export default function App() {
  return <main>
    <Header image={{ src: goalsImg, alt: 'A list of goals'}}>
      Your course goal
    </Header>
    <CourseGoal title="test">Test description</CourseGoal>
  </main>;
}
