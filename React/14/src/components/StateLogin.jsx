import { useState } from "react";

export default function Login() {
  const [values, setValues] = useState({
    email: '',
    password: ''
  })

  const [wasEdited, setWasEdited] = useState({
    email: false,
    password: false
  })

  const emailIsInvalid = wasEdited.email && !values.email.includes('@') 

  function handleSubmit(event) {
    event.preventDefault()
  }

  function handleInputChange(id, value) {
    setValues((prev) => ({
      ...prev,
      [id]: value
    }))
    setWasEdited((prev) => ({
      ...prev,
      [id]: false
    }))
  }

  function handleInputBlur(id) {
    setWasEdited((prev) => ({
    ...prev,
    [id]: true
    }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input 
            id="email" 
            type="email" 
            name="email" 
            onChange={(e) => handleInputChange('email', e.target.value)} 
            onBlur={() => handleInputBlur('email')}
            value={values.email}
          />
          <div className="control-error">{emailIsInvalid && <p>Please enter a valid email!</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input 
            id="password" 
            type="password" 
            name="password" 
            onChange={(e) => handleInputChange('password', e.target.value)} 
            value={values.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
