import "./Header.css"
import headerImg from "../assets/investment-calculator-logo.png"

export default function Header() {
  return (
    <div id="header">
      <div id="header-logo">
        <img src={headerImg} alt="Logo" />
        <h1> Investment calculator </h1>
      </div>
    </div>
  )
}
