import Input from "./components/Input";
import Button from "./components/Button";

function App() {
  return <main>
    <Input id="name" label="Name" type="text"/>
    <Input id="age" label="Age" type="number" min={0}/>
    <Button el="button">Click me!</Button>
    <Button el="anchor" href="#">Click me too!</Button>
  </main>;
}

export default App;
