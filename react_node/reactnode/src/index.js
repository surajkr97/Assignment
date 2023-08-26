// import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Nvbar from './MyComponents/bootstrap';
import Resume, { Resume1, Resume2, Resume3 } from './MyComponents/Resume';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <Nvbar /> */}
    <Resume/>
    <Resume1/>
    <Resume2/>
    <Resume3/>
  </>
);