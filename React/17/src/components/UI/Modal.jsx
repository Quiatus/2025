import { useEffect, useRef } from 'react'
import { createProtal } from 'react-dom'

export default function Modal({ children, open, className = ''}) {
  const dialog = useRef()

  useEffect(() => {
    if (open) {
      dialog.current.showModal()
    }
  }, [open])

  return createProtal(
    <dialog ref={dialog} className={`modal ${className}`}>{children}</dialog>, 
    document.getElementById('modal')
  )
}
