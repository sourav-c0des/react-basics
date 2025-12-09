// CONCEPT: Lists & Keys
// Demonstrates correct & incorrect key usage.

import { useState } from "react";

function ListDemo() {
  const [items, setItems] = useState([
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Cherry" },
  ]);

  const addItem = () => {
    const newItem = {
      id: Date.now(),          // unique key
      name: "New Item " + (items.length + 1),
    };
    setItems([...items, newItem]);
  };

  const removeFirst = () => {
    setItems(items.slice(1));
  };

  return (
    <section className="card">
      <h2>Lists & Keys Demo</h2>

      <button onClick={addItem}>Add Item</button>
      <button onClick={removeFirst} style={{ marginLeft: 8 }}>
        Remove First Item
      </button>

      <ul>
        {items.map((item) => (
          // Correct key usage
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </section>
  );
}

export default ListDemo;
