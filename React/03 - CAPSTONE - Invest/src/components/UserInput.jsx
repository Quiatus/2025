import "./UserInput.css"

export default function UserInput({ label, value, id, handleChange }) {
  function handleUpdate(e) {
    handleChange(e.target.value, id)
  }

  return (
    <div className="user-input">
      <label>{label}</label>
      <input type="number" required value={value} onChange={handleUpdate}/>
    </div>
  )
}
