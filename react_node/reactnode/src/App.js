// import logo from './logo.svg';
import './App.css';
import Resume, { Resume1, Resume2, Resume3 } from './MyComponents/Resume';
import New from './MyComponents/new';

export default function App(){
  return(
    <>
    <New />
    </>
  )
}

export function App1(){
  return(
    <>
      <Resume />
      <Resume1 />
      <Resume2 />
      <Resume3 />
    </>
  );
}



//reusability
//jsx : javascript xml
//xml : xtensible markup language
//virtual dom : copy of real dom
//React.fragment used to create group by avoiding div (<> </>)