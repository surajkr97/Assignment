import React, { useState } from "react";
function FormC(){
    const [userError, setUseError]=useState(false)
    const [passError, setPassError]=useState(false)
    function formFun(e){

        e.preventDefault()

        let flag=1

        let u=document.getElementById("un").value

        let p=document.getElementById("pd").value

        if(u==""){
            document.getElementById("up").innerHTML="Empty Field"
            flag = 0
        }
    }
}


return (
    <>
        <form action="#" id="ff" onSubmit={formFun}>
            <input id="un" type="text" placeholder='User Name' onChange={userFun} />
            {userError ? <span style={{ color: "red" }}>User Name Should Be Minimum 3 Character </span> : null}<br />
            <p id="up" style={{ color: "red" }}></p>
            <input id="pd" type="password" placeholder='Enter Password' onChange={passFun} />
            {passError ? <span style={{ color: "red" }}>Password Should Be Minimum 3 Characters </span> : null}<br />
            <p id="pp" style={{ color: "red" }}></p>
            <button type="submit">Submit</button>
        </form>
    </>
)