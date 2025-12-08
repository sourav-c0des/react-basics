// src/components/forms/FormDemo.jsx
import { useState, useRef } from "react";

function FormDemo() {
  // Controlled input
  const [name, setName] = useState("");

  // Uncontrolled input
  const emailRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailValue = emailRef.current.value; // uncontrolled

    alert(`
      Controlled Name: ${name}
      Uncontrolled Email: ${emailValue}
    `);

    // reset
    setName(""); // controlled
    emailRef.current.value = ""; // uncontrolled
  };

  return (
    <div style={{ marginTop: "24px" }}>
      <h2>Form Demo (Controlled vs Uncontrolled)</h2>

      <form onSubmit={handleSubmit}>
        
        {/* Controlled input */}
        <div style={{ marginBottom: "12px" }}>
          <label>Name (Controlled): </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Type your name"
          />
        </div>

        {/* LIVE updating display */}
        <div style={{ marginBottom: "12px" }}>
          <label>Your Name is: </label>
          <input
            type="text"
            value={name}   // uses SAME state
            readOnly
          />
        </div>

        {/* Uncontrolled input */}
        <div style={{ marginBottom: "12px" }}>
          <label>Email (Uncontrolled): </label>
          <input
            type="email"
            ref={emailRef}
            placeholder="Enter your email"
          />
        </div>

        <div style={{ marginBottom: "12px" }}>
          <label>Your Email is: </label>
          <input
            type="email"
            value={emailRef.current ? emailRef.current.value : ""}   // uses SAME state
            readOnly
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormDemo;
