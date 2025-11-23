export default function TabButton(props, onSelect) {
  return (
    <li>
      <button onClick={props.onSelect}>{props.children}</button>
    </li>
  )
}
