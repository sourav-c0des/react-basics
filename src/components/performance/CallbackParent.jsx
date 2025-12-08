// CONCEPT: useCallback ensures function reference stability.
// Without useCallback, this parent would re-create the function on every render,
// causing CallbackChild to re-render even if props did NOT change.

import { useState, useCallback } from "react";
import CallbackChild from "./CallbackChild";

function CallbackParent() {
  const [count, setCount] = useState(0);
  const [unrelated, setUnrelated] = useState(0);

  console.log("🔵 CallbackParent rendered");

  // ❌ Without useCallback:
  // const increment = () => setCount(c => c + 1);

  // ✅ With useCallback:
  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, []); // ← function will never change reference

  return (
    <section className="card">
      <h2>useCallback Demo</h2>

      <p>Count: {count}</p>
      <p>Unrelated: {unrelated}</p>

      <button onClick={() => setUnrelated(u => u + 1)}>
        Update Unrelated State
      </button>

      {/* Child only re-renders when increment reference changes */}
      <CallbackChild onClickIncrement={increment} />
    </section>
  );
}

export default CallbackParent;
