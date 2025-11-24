import { EXAMPLES } from '../data';
import TabButton from './TabButton';
import { useState } from 'react';
import "./Examples.css"

export default function Examples() {
  const [tab, setTab] = useState();

  return (
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
  )
}
