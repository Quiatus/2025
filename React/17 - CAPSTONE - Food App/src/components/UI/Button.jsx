export default function Button({ children, textOnly, disabled=false, className, ...props }) {
  const cssClasses = textOnly ? `text-button ${className}` : `button ${className}`

  return (
    <button disabled={disabled} className={cssClasses} {...props}>
      {children}
    </button>
  )
}
