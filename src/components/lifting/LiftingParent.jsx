// CONCEPT: Lifting State Up
// Shared state lives here. Both children receive value & setter via props.

import { useState } from "react";
import InputA from "./InputA";
import DisplayB from "./DisplayB";

function LiftingParent() {
  const [text, setText] = useState("");

  return (
    <section className="card">
      <h2>Lifting State Up Demo</h2>

      {/* Both children use the SAME state */}
      <InputA value={text} onChange={setText} />
      <DisplayB value={text} />
    </section>
  );
}

export default LiftingParent;
