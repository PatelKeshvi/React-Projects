import React from "react";

const Counter = ({ counter, setCounter }) => {
  return (
    <div className="counter">
      <h2>Counter: {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>➕ Increment</button>
      <button onClick={() => setCounter(counter - 1)}>➖ Decrement</button>
      <button onClick={() => setCounter(0)}>🔄 Reset</button>
    </div>
  );
};

export default Counter;
