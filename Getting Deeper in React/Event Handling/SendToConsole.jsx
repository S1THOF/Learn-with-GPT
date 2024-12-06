import React, { useState } from "react";

const SendToConsole = () => {
  const [result, setResult] = useState('');

  const sendToConsole = () => {
   console.log(result);
  };

  return (
    <div>
      <input 
        id='insert' 
        placeholder='Insert' 
        value={result}
        onChange={(e) => setResult(e.target.value)}
        ></input> <br/>
      <button onClick={sendToConsole}>To console</button>
     
    </div>
  );
};

export default SendToConsole;
