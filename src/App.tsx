import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  return (
    <div>
      <h1>Micro Project 3</h1>

      <button onClick={decrease}>-</button>

      <span style={{ margin: "0 15px" }}>Count: {count}</span>

      <button onClick={increase}>+</button>
    </div>
  );
}
