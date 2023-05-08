import { useEffect, useState } from "react";

export default function UseStateHook (){
    let [first, setFirst]=useState(1)
    let [second, setSecond]=useState(10)

    useEffect(()=>{console.log("Hello India")},[first])
    return(
        <>
        <h1>First Counter: {first}</h1>
        <h1>Second Counter: {second}</h1>
        <button onClick={()=>{setFirst(first+1)}}>First</button>
        <button onClick={()=>{setSecond(second+10)}}>Second</button>
        </>
    )
}
