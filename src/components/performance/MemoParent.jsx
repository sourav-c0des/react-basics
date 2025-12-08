// CONCEPT: Demonstrating React.memo by comparing re-renders.
// Updating unrelated state in the parent SHOULD NOT re-render MemoChild.

import { useState } from "react";
import MemoChild from "./MemoChild";

function MemoParent() {
  const [count, setCount] = useState(0);         // updates frequently
  const [childValue, setChildValue] = useState("Hello"); // passed to child

  console.log("🔵 MemoParent rendered");

  return (
    <section className="card">
      <h2>React.memo Demo</h2>

      <p>Parent Count: {count}</p>

      {/* Update parent state (child should NOT re-render) */}
      <button onClick={() => setCount(count + 1)}>Increase Parent Count</button>

      <br /><br />

      {/* Update child prop (child SHOULD re-render) */}
      <button onClick={() => setChildValue(childValue + "!")}>
        Update Child Prop
      </button>

      {/* Child wrapped with React.memo */}
      <MemoChild value={childValue} />
    </section>
  );
}

export default MemoParent;
