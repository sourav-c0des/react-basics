import { useState, useRef } from "react";

function FormDemo() {
  // Controlled Name input
  const [name, setName] = useState("");

  // Uncontrolled Email input
  const emailRef = useRef();

  // Submitted email (displayed after submit)
  const [submittedEmail, setSubmittedEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailValue = emailRef.current.value; // Read from DOM only on submit

    // Show alert
    alert(`
      Controlled Name: ${name}
      Uncontrolled Email: ${emailValue}
    `);

    // Update display for uncontrolled input
    setSubmittedEmail(emailValue);

    // Reset form
    setName("");                  // controlled
    emailRef.current.value = "";  // uncontrolled
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

        {/* Live updating display for controlled input */}
        <div style={{ marginBottom: "12px" }}>
          <label>Your Name is: </label>
          <input
            type="text"
            value={name}
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

        {/* Display email AFTER submit */}
        <div style={{ marginBottom: "12px" }}>
          <label>Your Email is: </label>
          <input
            type="text"
            value={submittedEmail}
            readOnly
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormDemo;
