// src/components/Header.jsx

// A simple functional component that receives props (title, username)
function Header({ title, username }) {
  return (
    <header style={{ marginBottom: "16px" }}>
      <h1>{title}</h1>
      <p>
        Welcome, <strong>{username}</strong> 👋
      </p>
    </header>
  );
}

export default Header;
