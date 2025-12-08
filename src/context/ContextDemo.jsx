// src/components/context/ContextDemo.jsx
import { useAppContext } from "./AppContext";

function ContextDemo() {
  const { userName, setUserName, theme } = useAppContext();

  return (
    <section style={{ marginTop: "24px" }}>
      <h2>Context Demo</h2>
      <p>Current user from context: <strong>{userName}</strong></p>
      <p>Current theme from context: <strong>{theme}</strong></p>

      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Change your name globally"
        style={{ marginRight: "8px" }}
      />

      <small>
        This input updates the name in context, and Header reflects it without props.
      </small>
    </section>
  );
}

export default ContextDemo;
