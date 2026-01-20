import { useState } from "react"

export function useInput(defaultValue, validationFn) {
  const [value, setValue] = useState(defaultValue)
  const [wasEdited, setWasEdited] = useState(false)

  const valueIsValid = validationFn(value)

  function handleInputChange(e) {
    setValue(e.target.value)
    setWasEdited(false)
  }

  function handleInputBlur() {
    setWasEdited(true)
  } 

  return {
    value,
    handleInputChange,
    handleInputBlur,
    hasError: wasEdited && !valueIsValid
  }
}