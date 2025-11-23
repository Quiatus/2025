import { useState } from 'react';

import { CORE_CONCEPTS, EXAMPLES } from '../data';
import CoreConcepts from './CoreConcepts';
import TabButton from './TabButton';

export default function Main() {
  const [tab, setTab] = useState()

  return (
    <main>
      <section id='core-concepts'>
        <h2>React Essentials</h2>
        <ul>
          {CORE_CONCEPTS.map((item) => <CoreConcepts key={item.title} {...item}/>)}
        </ul>
      </section>

      <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton isSelected={tab === 'components'} onSelect={() => setTab('components')}>Components</TabButton>
          <TabButton isSelected={tab === 'jsx'} onSelect={() => setTab('jsx')}>JSX</TabButton>
          <TabButton isSelected={tab === 'props'} onSelect={() => setTab('props')}>Props</TabButton>
          <TabButton isSelected={tab === 'state'} onSelect={() => setTab('state')}>State</TabButton>
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
