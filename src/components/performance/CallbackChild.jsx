// CONCEPT: React.memo + useCallback to prevent re-renders
// This child receives a callback. With useCallback in the parent, this will NOT re-render unnecessarily.

import React from "react";

function CallbackChild({ onClickIncrement }) {
  console.log("🔄 CallbackChild rendered");

  return (
    <div style={{ padding: 12, border: "1px solid #666", borderRadius: 8, marginTop: 12 }}>
      <h3>CallbackChild</h3>
      <button onClick={onClickIncrement}>Increase from Child</button>
    </div>
  );
}

export default React.memo(CallbackChild); // ← memoized child
