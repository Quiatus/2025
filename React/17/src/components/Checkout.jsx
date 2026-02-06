import { useContext, useActionState } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../utils/formatting";
import Input from "./UI/Input";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";
import useHttp from "../hooks/useHttp";
import Error from "./Error"

const config = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
}

export default function Checkout() {
  const cartCtx = useContext(CartContext)
  const userProgressCtx = useContext(UserProgressContext)

  const { data, error, sendRequest, clearData } = useHttp('http://localhost:3000/orders', config)

  const cartTotal = cartCtx.items.reduce((totalPrice, item) => totalPrice + item.price * item.quantity, 0)

  function handleClose() {
    userProgressCtx.hideCheckout()
  }

  function handleFinish() {
    userProgressCtx.hideCheckout()
    cartCtx.clearCart()
    clearData()
  }

  async function checkout(prevState, fd) {
    const customerData = Object.fromEntries(fd.entries())

    await sendRequest(
      JSON.stringify({
        order: {
          items: cartCtx.items, 
          customer: customerData
        }
      })
    )
  }

  const [formState, formAction, isSending] = useActionState(checkout, null)

  let actions = (
    <>
      <Button type="button" textOnly onClick={handleClose}>Close</Button>
      <Button>Submit Order</Button>
    </>
  )

  if (isSending) {
    actions = <span>Sending order...</span>
  }

  if (data && !error) {
    return <Modal open={userProgressCtx.progress === 'checkout'} onClose={handleFinish}>
      <h2>Success</h2>
      <p>Order has been placed!</p>
      <p className="modal-actions">
        <Button onClick={handleFinish}>Okay</Button>
      </p>
    </Modal>
  }

  return (
    <Modal open={userProgressCtx.progress === 'checkout'} onClose={handleClose}>
      <form action={formAction}>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>
        <Input label="Full Name" type="text" id="name" />
        <Input label="Email Address" type="email" id="email" />
        <Input label="Street" type="text" id="street" /> 
        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code" /> 
          <Input label="City" type="text" id="city" /> 
        </div>

        {error && <Error title="failed to submit order" message={error} />}

        <p className="modal-actions">{actions}</p>
      </form>
    </Modal>
  )
}
