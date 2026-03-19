import Accordion from "./components/Accordion/Accordion";

function App() {
  return <main>
    <section>
      <h2>Why us?</h2>
      <Accordion className="accordion">
        <Accordion.Item id="1" className="accordion-item">
          <Accordion.Title className="accordion-item-title" id="1">
            We have 20 years of experience
          </Accordion.Title>
          <Accordion.Content className="accordion-item-content" id="1">
            <article>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
              <p>Animi ea quis quia expedita beatae, id laudantium nostrum soluta saepe voluptatem asperiores tenetur aspernatur perferendis aut repellendus nobis et? Nostrum, asperiores?</p>
            </article>
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item id="2" className="accordion-item">
          <Accordion.Title className="accordion-item-title" id="2">
            We work with local guides.
          </Accordion.Title>
          <Accordion.Content className="accordion-item-content" id="2">
            <article>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
              <p>Animi ea quis quia expedita beatae, id laudantium nostrum soluta saepe voluptatem asperiores tenetur aspernatur perferendis aut repellendus nobis et? Nostrum, asperiores?</p>
            </article>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </section>
  </main>
}

export default App;
