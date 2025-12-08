// CONCEPT: React.memo - prevents unnecessary re-renders
// This child component will ONLY re-render if its props change.

import React from "react";

function MemoChild({ value }) {
  console.log("🔄 MemoChild rendered");

  return (
    <div style={{ padding: "12px", border: "1px solid #888", borderRadius: "8px", marginBottom: "16px" }}>
      <h3>MemoChild Component</h3>
      <p>Value from parent: {value}</p>
    </div>
  );
}

// 🚀 Wrap component with React.memo
export default React.memo(MemoChild);
