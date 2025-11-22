import { CORE_CONCEPTS } from '../data';
import CoreConcepts from './CoreConcepts';

export default function Main() {
  return (
    <main>
      <section id='core-concepts'>
        {/* <h2>React Essentials</h2> */}
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
