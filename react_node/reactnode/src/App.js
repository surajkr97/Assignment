import React from "react";


//reusability
//jsx : javascript xml
//xml : xtensible markup language
//virtual dom : copy of real dom
//React.fragment used to create group by avoiding div (<> </>)

import { ExpenseApp } from "./MyComponents/Expense";
// import HideShow from "./MyComponents/HideShowButton"

export default function App(){
    return(
        <>
        <ExpenseApp />
        </>
    );
}

