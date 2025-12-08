// src/components/Counter.jsx
import { useState } from "react";

function Counter({ initial }) {
  // useState hook manages internal state for this component
  const [count, setCount] = useState(initial);

  const handleIncrement = () => {
    // Functional update based on previous state (good practice)
    setCount((prev) => prev + 1);
  };

  const handleReset = () => {
    setCount(initial);
  };

  return (
    <section>
      <h2>Counter</h2>
      <p>Current value: {count}</p>

      <button onClick={handleIncrement} style={{ marginRight: "8px" }}>
        +1
      </button>

      <button onClick={handleReset}>Reset</button>
    </section>
  );
}

export default Counter;
