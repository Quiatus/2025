import { useState, useRef } from "react";

export default function Player() {
  const name = useRef();

  const [playerName, setPlayerName] = useState(null)

  function handleSubmitted() {
    setPlayerName(name.current.value) 
    name.current.value = '';
  }

  return (
    <section id="player">
      <h2>Welcome, {playerName || 'unknown entity'}</h2>
      <p>
        <input ref={name} type="text" />
        <button onClick={handleSubmitted}>Set Name</button>
      </p>
    </section>
  );
}
