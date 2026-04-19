import Link from "next/link";

export default function Meals() {
  return (
    <main>
      <h1>Meals</h1>
      <p>
        <Link href="/meals/meal-1">Example meal</Link>
      </p>
    </main>
  )
}
