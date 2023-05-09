import React from "react";
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
export default function Routing(){
    return(
        <div>
            <BrowserRouter>
            <Link to="/home">Home Page</Link><br/>
            <Link to="/contact">Contact Page</Link><br/>
            <Link to="/services">Services Page</Link><br/>
            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/services" element={<Services/>}/>
            </Routes>
            </BrowserRouter>
        </div>
    );
}

function Home(){
    return(
        <div>
            <h1 style={{color:"Red"}}> Home Component </h1>
            <h3>Hello My Name Is Suraj Kumar Gupta</h3>
            <p>kdhjf sdfkjsdf fivbfw vfijv svjrwbv esnv eiurjv fvibv env wrigv vren eirjkv erknv brv er knv erjkv erjvbreofer fjerbf fgvigv</p>
            <br/>
        </div>
    );
}

function Contact(){
    return(
        <div>
            <h1 style={{color:"Yellow"}}> Contact Component </h1>
            <h3>Hello My Name Is Suraj Kumar Gupta</h3>
            <p>kdhjf sdfkjsdf fivbfw vfijv svjrwbv esnv eiurjv fvibv env wrigv vren eirjkv erknv brv er knv erjkv erjvbreofer fjerbf fgvigv</p>
            <br/>
        </div>
    );
}

function Services(){
    return(
        <div>
            <h1 style={{color:"Green"}}> Services Component </h1>
            <h3>Hello My Name Is Suraj Kumar Gupta</h3>
            <p>kdhjf sdfkjsdf fivbfw vfijv svjrwbv esnv eiurjv fvibv env wrigv vren eirjkv erknv brv er knv erjkv erjvbreofer fjerbf fgvigv</p>
            <br/>
        </div>
    );
}