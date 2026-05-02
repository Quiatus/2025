import classes from './meals-grid.module.css'
import MealItem from './meal-item'

type Meals = {
  meals: string[]
}

export default function MealsGrid({ meals }: Meals) {
  return (
    <ul className={classes.meals}>
      {meals.map(meal => <li key={meal.id}>
        <MealItem {...meal}/>
      </li>)}
    </ul>
  )
}
