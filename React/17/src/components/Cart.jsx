import { useContext } from "react";
import Modal from "./UI/Modal";
import Button from './UI/Button'
import CartContext from "../store/CartContext";
import { currencyFormatter } from '../utils/formatting'
import UserProgressContext from "../store/UserProgressContext";
import CartItem from "./CartItem";

export default function Cart() {
  const cartCtx = useContext(CartContext)
  const userProgressCtx = useContext(UserProgressContext)

  const cartTotal = cartCtx.items.reduce((totalPrice, item) => totalPrice + item.price * item.quantity, 0)

  function handleCloseCart() {
    userProgressCtx.hideCart()
  }

  return <Modal className="cart" open={userProgressCtx.progress === 'cart'}>
    <h2>Your Cart</h2>
    <ul>
      {cartCtx.items.map(item => 
        <CartItem 
          key={item.id} 
          {...item} 
          onIncrease={() => cartCtx.addItem(item)} 
          onDecrease={() => cartCtx.removeItem(item.id)}
        />)}
    </ul>
    <p className="cart-total">Total: {currencyFormatter.format(cartTotal)}</p>
    <p className="modal-actions">
      <Button textOnly onClick={handleCloseCart}>Close</Button>
      <Button onClick={handleCloseCart} disabled={!cartCtx.items.length}>Checkout</Button>
    </p>
  </Modal>
}
