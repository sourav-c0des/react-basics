// src/components/performance/CallbackChild.jsx
// CONCEPT: React.memo + stable props → child only re-renders when props actually change.

import React from "react";

function CallbackChild({ onClickIncrement }) {
  console.log("🔄 CallbackChild rendered"); // ✅ CHILD log text

  return (
    <div
      style={{
        padding: 12,
        border: "1px solid #666",
        borderRadius: 8,
        marginTop: 12,
      }}
    >
      <h3>CallbackChild</h3>
      <button onClick={onClickIncrement}>Increase from Child</button>
    </div>
  );
}

export default React.memo(CallbackChild); // ✅ memoized child
