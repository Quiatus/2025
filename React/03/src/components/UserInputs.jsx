import "./UserInputs.css"
import UserInput from "./UserInput"

export default function UserInputs({ onUpdate, values }) {
  return (
    <div id="user-inputs">
      <UserInput label="Initial investment" id="initialInvestment" value={values.initialInvestment} handleChange={onUpdate}/>
      <UserInput label="Annual investment" id="annualInvestment" value={values.annualInvestment} handleChange={onUpdate}/>
      <UserInput label="Expected return" id="expectedReturn" value={values.expectedReturn} handleChange={onUpdate}/>
      <UserInput label="Duration" id="duration" value={values.duration} handleChange={onUpdate}/>
    </div>
  )
}
