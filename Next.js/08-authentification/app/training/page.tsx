import { getTrainings } from '@/lib/training';

interface TrainingType {
  id: number;
  image: string;
  title: string;
  description: string;
}

export default async function TrainingPage() {
  const trainingSessions = getTrainings() as TrainingType[];

  return (
    <main>
      <h1>Find your favorite activity</h1>
      <ul id="training-sessions">
        {trainingSessions.map((training) => (
          <li key={training.id}>
            <img src={`/trainings/${training.image}`} alt={training.title} />
            <div>
              <h2>{training.title}</h2>
              <p>{training.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
