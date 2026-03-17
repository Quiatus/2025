import Accordion from "./components/Accordion/Accordion";

function App() {
  return <main>
    <section>
      <h2>Why us?</h2>
      <Accordion className="accordion">
        <Accordion.Item id="1" className="accordion-item" title="We have 20 years of experience">
          <article>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
            <p>Animi ea quis quia expedita beatae, id laudantium nostrum soluta saepe voluptatem asperiores tenetur aspernatur perferendis aut repellendus nobis et? Nostrum, asperiores?</p>
          </article>
        </Accordion.Item>
        <Accordion.Item id="2" className="accordion-item" title="We work with local guides.">
          <article>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
            <p>Animi ea quis quia expedita beatae, id laudantium nostrum soluta saepe voluptatem asperiores tenetur aspernatur perferendis aut repellendus nobis et? Nostrum, asperiores?</p>
          </article>
        </Accordion.Item>
      </Accordion>
    </section>
  </main>;
}

export default App;
