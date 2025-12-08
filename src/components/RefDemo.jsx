import { useRef, useEffect } from "react";

function RefDemo() {
  const inputRef = useRef(null); // ref starts empty

  useEffect(() => {
    console.log("Focusing input...");
    inputRef.current.focus(); // DOM access
  }, []);

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>useRef Demo</h2>
      <input
        ref={inputRef}
        type="text"
        placeholder="I will get focused automatically"
        style={{ padding: "8px" }}
      />
    </div>
  );
}

export default RefDemo;
