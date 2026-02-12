import { Link } from "react-router-dom"
import classes from './Products.module.css'

export const DUMMY_PRODUCTS = [
  {id: 'p1', title: 'Product I'},
  {id: 'p2', title: 'Product II'},
  {id: 'p3', title: 'Product III'},
  {id: 'p4', title: 'Product IV'},
  {id: 'p5', title: 'Product V'},
]

export default function Products() {
  return (
    <div>
      <h1>Products</h1>
      <ul className={classes.list}>
        {DUMMY_PRODUCTS.map(item => <li key={item.id}><Link to={`/products/${item.id}`}>{item.title}</Link></li>)}
      </ul>
    </div>
  )
}
