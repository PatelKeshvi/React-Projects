import React, { useState } from "react";
import "./App.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <h2 className="counter-value">Counter: {count}</h2>
      <button className="counter-button" onClick={() => setCount(count - 1)}>
        -
      </button>
      <button className="counter-button" onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  );
};

export default Counter;
