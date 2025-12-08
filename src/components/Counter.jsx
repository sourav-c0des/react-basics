import { useState, useEffect } from "react";

function Counter({ initial }) {
  const [count, setCount] = useState(initial);

  // 1️⃣ Run ONCE when component mounts
  useEffect(() => {
    console.log("Counter mounted");

    // Cleanup runs when component unmounts
    return () => {
      console.log("Counter unmounted");
    };
  }, []); // empty array → runs only once

  // 2️⃣ Run when 'count' changes
  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  // 3️⃣ Timer effect → updates every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("Timer tick");
    }, 1000);

    // Cleanup: stop the timer when component is removed
    return () => {
      clearInterval(intervalId);
      console.log("Timer stopped");
    };
  }, []);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleReset = () => {
    setCount(initial);
  };

  return (
    <section>
      <h2>Counter</h2>
      <p>Current value: {count}</p>

      <button onClick={handleIncrement} style={{ marginRight: "8px" }}>
        +1
      </button>

      <button onClick={handleReset}>Reset</button>
    </section>
  );
}

export default Counter;
