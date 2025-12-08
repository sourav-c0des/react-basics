import { useState, useEffect, useRef } from "react";

function Counter({ initial }) {
  const [count, setCount] = useState(initial);

  const prevCountRef = useRef(count);

  useEffect(() => {
    prevCountRef.current = count; // store current count as previous
  }, [count]);

  return (
    <section style={{ marginBottom: "20px" }}>
      <h2>Counter</h2>
      <p>Current value: {count}</p>
      <p>Previous value (stored in ref): {prevCountRef.current}</p>

      <button onClick={() => setCount((c) => c + 1)} style={{ marginRight: 8 }}>
        +1
      </button>

      <button onClick={() => setCount(initial)}>Reset</button>
    </section>
  );
}

export default Counter;
