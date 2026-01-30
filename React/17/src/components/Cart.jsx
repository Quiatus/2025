import { useContext } from "react";
import Modal from "./UI/Modal";
import Button from './UI/Button'
import CartContext from "../store/CartContext";
import { currencyFormatter } from '../utils/formatting'

export default function Cart() {
  const cartCtx = useContext(CartContext)
  const cartTotal = cartCtx.items.reduce((totalPrice, item) => totalPrice + ite.price * item.quantity, 0)

  return <Modal className="cart">
    <h2>Your Cart</h2>
    <ul>
      {cartCtx.items.map(item => <li key={item.id}>{item.name} - {item.quantity}</li>)}
    </ul>
    <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
    <p className="modal-actions">
      <Button textOnly>Close</Button>
      <Button>Checkout</Button>
    </p>
  </Modal>
}
