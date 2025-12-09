// CONCEPT: Lifting State Up
// This component receives the shared state updater from the parent.

function InputA({ value, onChange }) {
  return (
    <div>
      <h3>Input Component</h3>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Type something"
      />
    </div>
  );
}

export default InputA;
