import { useAppContext } from "../context/AppContext";

function Header({ title }) {
  const { userName, theme, setTheme } = useAppContext();
  const isDark = theme === "dark";

  return (
    <header className="header">
      <h1>{title}</h1>
      <p>
        Welcome, <strong>{userName}</strong> 👋
      </p>

      <button
        onClick={() => setTheme((prev) => (prev === "light" ? "dark" : "light"))}
        className="btn-secondary"
      >
        Toggle Theme (Current: {isDark ? "Dark" : "Light"})
      </button>
    </header>
  );
}

export default Header;
