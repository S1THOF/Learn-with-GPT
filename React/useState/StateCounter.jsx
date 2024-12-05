import React, { useState } from "react";

const StateCounter = () => {
  const [count, setCount] = useState(0);

  const plusCounter = () => {setCount(count + 1)}
  const minusCounter = () => {setCount(count - 1)}

  return (
    <div>
      <p>{count}</p>
      <button onClick={plusCounter}>+</button>
      <button onClick={minusCounter}>-</button>
    </div>
  );
};

export default StateCounter;
