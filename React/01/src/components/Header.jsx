import reactImg from '../assets/react-core-concepts.png'
import "./Header.css"

const descr = ['Fundamental', 'Core', 'Crucial'];
const rnd = () =>  Math.floor(Math.random() * descr.length)

export default function Header() {
  const randomDescr = descr[rnd()]

  return <header>
    <img src={reactImg} alt="Stylized atom" />
    <h1>React Essentials</h1>
    <p>
      {randomDescr} React concepts you will need for almost any app you are
      going to build!
    </p>
  </header>
}