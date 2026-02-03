import { currencyFormatter } from '../utils/formatting'

export default function CartItem({ name, quantity, price, onDecrease, onIncrease}) {
  return (
    <li className="cart-item">
      <p className='cart-item-name'>
       <span>{quantity} x {name}</span> 
       <span>{currencyFormatter.format(price * quantity)}</span> 
      </p>
      <p className="cart-item-actions">
        <button onClick={onDecrease}>-</button>
        <span>{quantity}</span>
        <button onClick={onIncrease}>+</button>
      </p>
    </li>
  )
}
