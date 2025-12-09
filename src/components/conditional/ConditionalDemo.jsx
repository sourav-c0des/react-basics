import { useState } from "react";

function ConditionalDemo() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [showDetails, setShowDetails] = useState(true);

  return (
    <section className="card">
      <h2>Conditional Rendering Demo</h2>

      {/* 1. Ternary */}
      <p>
        {loggedIn ? "Welcome back!" : "You are not logged in."}
      </p>

      <button onClick={() => setLoggedIn((v) => !v)}>
        Toggle Login
      </button>

      <hr />

      {/* 2. && operator */}
      {showDetails && <p>User Details: Basic Tier</p>}

      <button onClick={() => setShowDetails((v) => !v)}>
        Toggle Details
      </button>

      <hr />

      {/* 3. Early return pattern example */}
      {loggedIn ? (
        <p>You can access premium features.</p>
      ) : (
        null   // hides UI when false
      )}
    </section>
  );
}

export default ConditionalDemo;
