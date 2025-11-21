import reactImg from './assets/react-core-concepts.png'
import { CORE_CONCEPTS } from './data';

const descr = ['Fundamental', 'Core', 'Crucial'];
const rnd = () =>  Math.floor(Math.random() * descr.length)

function Header() {
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

function CoreConcepts({image, title, description}) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}

function Main() {
  return (
    <main>
      <section id='core-concepts'>
        <h2>React Essentials</h2>
        <ul>
          <CoreConcepts {...CORE_CONCEPTS[0]}/>
          <CoreConcepts {...CORE_CONCEPTS[1]}/>
          <CoreConcepts {...CORE_CONCEPTS[2]}/>
          <CoreConcepts {...CORE_CONCEPTS[3]}/>
        </ul>
      </section>
    </main>
  )
}


function App() {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}

export default App;
