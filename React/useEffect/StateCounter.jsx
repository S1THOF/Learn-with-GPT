import React, { useState, useEffect } from "react";

const StateCounter = () => {
  const [count, setCount] = useState(0);

  const plusCounter = () => {setCount(prevCount => prevCount + 1)}
  const minusCounter = () => {setCount(prevCount => prevCount - 1)}
  
  useEffect(() => console.log('You clicked:', count),[count]);
  

  return (
    <div>
      <p>{count}</p>
      <button onClick={plusCounter}>+</button>
      <button onClick={minusCounter}>-</button>
    </div>
  );
};

export default StateCounter;
