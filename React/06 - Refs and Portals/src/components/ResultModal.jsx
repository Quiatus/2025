// For older React versions (18 and lower), ref cannot be passed as parameter. Instead:
//
// import { forwardRef, useImperativeHandle, useRef } from 'react';
//
// const ResultModal = forwardRef(function ResultModal({ result, targetTime }, ref)) { ... fn body ... }
//
// used with useImperativeHandle hook

import { createPortal } from 'react-dom'

export default function ResultModal({ ref, targetTime, remainingTime, onReset }) {

  // In case react 18 and forward ref, useImperativeHandle hook to be used to call the internal function. 
  // The outside component then use .open() method to call showModal()

  // const dialog = useRef()

  // useImperativeHandle(ref, () => {
  //   return {
  //     open() {
  //       dialog.current.showModal()
  //     }
  //   }
  // })

  const userLost = remainingTime <= 0
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2)
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100)

  return createPortal(
    <dialog ref={ref} /* ref={dialog} */ className="result-modal" onClose={onReset}>
      {userLost ? <h2>You lost!</h2> : <h2>Your score: {score}</h2>}
      <p>The target time was <strong>{targetTime}</strong> second{targetTime > 1 ? 's' : ''}.</p>

      <p>You stopped the timer with <strong>{formattedRemainingTime} seconds left.</strong></p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>, 
    document.getElementById('modal')
  )
}
