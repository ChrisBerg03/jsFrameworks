/* eslint-disable */
import { useState } from "react";
import { CountButton, InputTest } from "./components/Testing";

function App() {

  function squaredNumber(number) {
    return number * number;
  }

  function Component({ title, description }) {
    return (
      <div style={{ border: "1px solid" }}>
        <h1>{title}</h1>
        <h2>This is my first component!</h2>
        <p>{description}</p>
      </div>
    );
  }

  function Component2({title, description}) {
    return (
      <div>
        <h1>{title}</h1>
        <h2>{description}</h2>
      </div>
    )
  }

  return (
    <div className="app">
      <header>THis is the header of JNet</header>
      <main>
        <h1>Main header numero uno!</h1>
        <p>Value: {2+2}</p>
        <InputTest />
        <CountButton />
        <p>Squared number = {squaredNumber(5)}</p>
        <Component 
          title="My first componenterino" 
          description="crippling depression" 
        />
        <Component2 
          title="Osteoporosis"
          description="drink milk"
        />
      </main>
      <footer>Footer gang</footer>
    </div>
  )
}

export default App