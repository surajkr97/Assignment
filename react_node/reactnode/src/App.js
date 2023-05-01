// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <h1>Form</h1>
      <hr width="80%"></hr>
    </>
  );
}

export function App2() {
  return (
    <div id="hero">
      <label>Username </label><input type="text" value="" placeholder="Enter Your Name"></input><br></br>
      <label>Password </label><input type="text" value="" placeholder="Enter Your Password"></input><br></br>
      <button>Sign In</button>
    </div>
  );
}

export default App;

//reusability
//jsx : javascript xml
//xml : xtensible markup language
//virtual dom : copy of real dom