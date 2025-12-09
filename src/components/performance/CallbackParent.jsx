// src/components/performance/CallbackParent.jsx
// CONCEPT: useCallback memoizes function reference so React.memo child doesn't re-render unnecessarily.

import { useState, useCallback } from "react";
import CallbackChild from "./CallbackChild";

function CallbackParent() {
  const [count, setCount] = useState(0);
  const [unrelated, setUnrelated] = useState(0);

  console.log("🔵 CallbackParent rendered");

  // ❌ Version that breaks memo (for reference):
  // const increment = () => setCount(c => c + 1);

  // ✅ useCallback: function reference is stable between renders
  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, []); // no dependencies → same function instance every render

  return (
    <section className="card">
      <h2>useCallback Demo</h2>

      <p>Count: {count}</p>
      <p>Unrelated: {unrelated}</p>

      {/* Updating unrelated state: SHOULD NOT re-render child */}
      <button onClick={() => setUnrelated((u) => u + 1)}>
        Update Unrelated State
      </button>

      {/* Child only re-renders when `increment` reference OR other props change */}
      <CallbackChild onClickIncrement={increment} />
    </section>
  );
}

export default CallbackParent;
