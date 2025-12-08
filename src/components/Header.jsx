// src/components/Header.jsx
import { useAppContext } from "../context/AppContext";

function Header({ title }) {
  const { userName, theme, setTheme } = useAppContext();

  const isDark = theme === "dark";

  return (
    <header
      style={{
        marginBottom: "16px",
        paddingBottom: "8px",
        borderBottom: "1px solid #555",
      }}
    >
      <h1>{title}</h1>
      <p>
        Welcome, <strong>{userName}</strong> 👋
      </p>

      <button
        onClick={() => setTheme((prev) => (prev === "light" ? "dark" : "light"))}
        style={{ marginTop: "8px" }}
      >
        Toggle Theme (Current: {isDark ? "Dark" : "Light"})
      </button>
    </header>
  );
}

export default Header;
