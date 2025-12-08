// src/components/performance/ExpensiveList.jsx
import React from "react";

function ExpensiveList({ items, onItemClick }) {
  console.log("ExpensiveList rendered");

  return (
    <ul>
      {items.map((item) => (
        <li key={item} onClick={() => onItemClick(item)}>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default React.memo(ExpensiveList);
