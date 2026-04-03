import Input from "./components/Input";
import Button from "./components/Button";
import { useRef } from "react";
import Form, { type FormHandler } from "./components/Form";
// import Container from "./components/Container";

function App() {
  //const input = useRef<HTMLInputElement>(null)

  const customForm = useRef<FormHandler>(null)

  function saveHandler(data: unknown) {
    const extractedData = data as {
      name: string;
      age: string
    }

    console.log(extractedData)
    customForm.current?.clear()
  }

  return <main>
    {/* <Input id="name" label="Name" type="text" ref={input}/>
    <Input id="age" label="Age" type="number" min={0}/> 
    <Button el="button">btn</Button>
    <Button el="anchor" href="#">Click me too!</Button> 
    <Container as={Button} >Click </Container> */}

    <Form onSave={saveHandler} ref={customForm}>
      <Input type="text" label="Name" id="name" />
      <Input type="number" label="Age" id="age" />
      <p>
        <Button>Save</Button>
      </p>
    </Form>
  </main>;
}

export default App;
