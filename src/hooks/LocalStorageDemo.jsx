// CONCEPT: Using a custom hook to persist data

import useLocalStorage from "./useLocalStorage";

function LocalStorageDemo() {
  const [name, setName] = useLocalStorage("username", "");

  return (
    <section className="card">
      <h2>Custom Hook: useLocalStorage</h2>

      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p>Stored in localStorage: {name}</p>
    </section>
  );
}

export default LocalStorageDemo;
