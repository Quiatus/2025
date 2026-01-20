import { useState } from "react";
import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from '../util/validation'

export default function Login() {
  const [values, setValues] = useState({
    email: '',
    password: ''
  })

  const [wasEdited, setWasEdited] = useState({
    email: false,
    password: false
  })

  const emailIsInvalid = wasEdited.email && !isEmail(values.email) && !isNotEmpty(values.email)
  const passwordIdInvalid = wasEdited.password && !hasMinLength(values.password, 6)

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
        <Input 
          label="Email"
          id="email"
          type="email"
          name="email"
          onChange={(e) => handleInputChange('email', e.target.value)} 
          onBlur={() => handleInputBlur('email')}
          value={values.email}
          error={emailIsInvalid && 'Please enter a valid email'}
        />

        <Input 
          label="Password"
          id="password"
          type="password"
          name="password"
          onChange={(e) => handleInputChange('password', e.target.value)} 
          onBlur={() => handleInputBlur('password')}
          value={values.password}
          error={passwordIdInvalid && 'Please enter a valid password'}
        />

      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
