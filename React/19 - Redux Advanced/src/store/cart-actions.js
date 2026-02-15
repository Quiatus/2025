import { uiActions } from './ui'
import { URL } from '../api_key';
import { cartActions } from './cart';

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(uiActions.showNotification({
      status: 'pending',
      title: 'Sending...',
      message: 'Sending cart data.'
    }))
    
    const sendRequest = async () => {
      const response = await fetch(`${URL}cart.json`, {
        method: 'PUT',
        body: JSON.stringify({
          items: cart.items,
          totalQuantity: cart.totalQuantity
        })
      })

      if (!response.ok) {
        throw new Error('Sending data failed!')        
      }
    }

    try {
      await sendRequest()
      
      dispatch(uiActions.showNotification({
        status: 'success',
        title: 'Success',
        message: 'Sending data complete!'
      }))
    } catch (error) {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error',
        message: 'Sending data failed!'
      }))
    }
  }
}

export const fetchCartData = () => {
  return async dispatch => {
    const fetchData = async () => {
      const response = await fetch(`${URL}cart.json`)

      if (!response.ok) {
        throw new Error('Unable to load data!')
      }

      const data = await response.json()

      return data
    }

    try {
      const cartData = await fetchData() 
      dispatch(cartActions.replaceCart({
        items: cartData.items || [],
        totalQuantity: cartData.totalQuantity
      }))
    } catch (error) {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error',
        message: 'Receiving data failed!'
      }))
    }
  }
}