import React, { useState } from "react";

function Factorial() {
  const [number, setNumber] = useState(0);
  const [factorial, setFactorial] = useState(1);

  const calfact = () => {
    let fact = 1;
    for (let i = 1; i <= number; i++) {
      fact = fact * i;
    }
    setFactorial(fact);
  };

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={calfact}>Calculate</button>
      <p>Factorial: {factorial}</p>
    </div>
  );
}

export default Factorial;
