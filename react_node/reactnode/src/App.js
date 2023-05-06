import './App.css';
import { ExpenseTrack } from './MyComponents/Expense';

// import Resume, { Resume1, Resume2, Resume3 } from './MyComponents/Resume';
// import New from './MyComponents/new';

// export default function App(){
//   return(
//     <>
//     <New />
//     </>
//   )
// }

// export function App1(){
//   return(
//     <>
//       <Resume />
//       <Resume1 />
//       <Resume2 />
//       <Resume3 />
//     </>
//   );
// }


//reusability
//jsx : javascript xml
//xml : xtensible markup language
//virtual dom : copy of real dom
//React.fragment used to create group by avoiding div (<> </>)


export function ExpenseApp(){
    let ob = {
        "dt1": new Date(2020, 1, 19), "nm1": "Car Insurance", "pr1": "$200",
        "dt2": new Date(2021, 8, 24), "nm2": "T-Shirt for Goa Trip", "pr2": "$80",
        "dt3": new Date(2022, 7, 11), "nm3": "Shoes", "pr3": "$700",
        "dt4": new Date(2023, 2, 25), "nm4": "Goa Trip", "pr4": "$2600"
    }
    return(
        <>
        <ExpenseTrack date={ob.dt1} exp={ob.nm1} price={ob.pr1}/>
        <ExpenseTrack date={ob.dt2} exp={ob.nm2} price={ob.pr2}/>
        <ExpenseTrack date={ob.dt3} exp={ob.nm3} price={ob.pr3}/>
        <ExpenseTrack date={ob.dt4} exp={ob.nm4} price={ob.pr4}/>
        </>
    );
}