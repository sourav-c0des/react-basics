// CONCEPT: Lifting State Up
// This component receives shared state as props.

function DisplayB({ value }) {
  return (
    <div>
      <h3>Display Component</h3>
      <p>You typed: {value}</p>
    </div>
  );
}

export default DisplayB;
