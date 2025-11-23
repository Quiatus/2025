import { useState } from 'react';

import { CORE_CONCEPTS, EXAMPLES } from '../data';
import CoreConcepts from './CoreConcepts';
import TabButton from './TabButton';

export default function Main() {
  const [tab, setTab] = useState()

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

      <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton onSelect={() => setTab('components')}>Components</TabButton>
          <TabButton onSelect={() => setTab('jsx')}>JSX</TabButton>
          <TabButton onSelect={() => setTab('props')}>Props</TabButton>
          <TabButton onSelect={() => setTab('state')}>State</TabButton>
        </menu>
        <div id="tab-content">
          {!tab ? <p>Please select a topic.</p> : 
          <>
          <h3>{EXAMPLES[tab].title}</h3>
          <p>{EXAMPLES[tab].description}</p>
          <pre>
            <code>{EXAMPLES[tab].code}</code>
          </pre>
          </>}
        </div>
      </section>
    </main>
  )
}
