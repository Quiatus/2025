import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { URL } from './api_key';
import { uiActions } from './store/ui';

let isInitial = true

function App() {
  const dispatch = useDispatch()
  const cartIsVisible = useSelector(state => state.ui.cartIsVisible)
  const cart = useSelector(state => state.cart)
  const notification = useSelector(state => state.ui.notification)

  useEffect(() => {
    const sentCartData = async () => {
      dispatch(uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data.'
      }))

      const response = await fetch(`${URL}cart.json`, {
        method: 'PUT',
        body: JSON.stringify(cart)
      })

      if (!response.ok) {
        throw new Error('Sending data failed!')
      }

      //const data = await response.json()

      dispatch(uiActions.showNotification({
        status: 'success',
        title: 'Success',
        message: 'Sending data complete!'
      }))
    }

    if (isInitial) {
      isInitial = false
      return
    }

    sentCartData().catch(error => {
      dispatch(uiActions.showNotification({
          status: 'error',
          title: 'Error',
          message: 'Sending data failed!'
        }))
    })
    
  }, [cart, dispatch])
  
  return (
    <>
      {notification && <Notification status={notification.status} title={notification.title} message={notification.message} />}
      <Layout>
        {cartIsVisible && <Cart />}
        <Products />
      </Layout>
    </>

  );
}

export default App;
