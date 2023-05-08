import React, { useState } from "react";

function Factorial() {
let [val, setValue] = useState(0)
function fact() {
  let a = document.getElementById("fct").value;
  let f = 1
  for (let i = 1; i <= a; i++) {
    f = f*i;
  }
  setValue(f)
}

return(
  <>
  <input type="text" id="fct" placeholder="enter number"></input>
  <h1 style={{color:'red'}}>Factorial is: {val}</h1>

  <button onClick={fact}>Factorial</button>
  </>
)
}

export default Factorial;
