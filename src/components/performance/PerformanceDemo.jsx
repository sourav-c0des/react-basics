// src/components/performance/PerformanceDemo.jsx
import { useState, useMemo, useCallback } from "react";
import ExpensiveList from "./ExpensiveList";

function slowDouble(n) {
  console.log("Running expensive calculation...");
  for (let i = 0; i < 1e7; i++) {} // simulate heavy work
  return n * 2;
}

function PerformanceDemo() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");

  // 1️⃣useMemo: avoid slow calculation on every render
  const doubled = useMemo(() => {
    return slowDouble(count);
  }, [count]);

  // 2️⃣useCallback: stable function reference for memoized child
  const handleItemClick = useCallback((item) => {
    console.log("Clicked item:", item);
  }, []);

  const items = useMemo(() => ["React", "Vue", "Angular"], []);

  return (
    <div style={{ marginTop: "24px" }}>
      <h2>Performance Demo</h2>

      <p>Count: {count}</p>
      <p>Doubled (expensive): {doubled}</p>

      <button onClick={() => setCount((c) => c + 1)}>Increment Count</button>

      <div style={{ marginTop: "16px" }}>
        <input
          type="text"
          placeholder="Typing here won't trigger slow calc"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <ExpensiveList items={items} onItemClick={handleItemClick} />
    </div>
  );
}

export default PerformanceDemo;
