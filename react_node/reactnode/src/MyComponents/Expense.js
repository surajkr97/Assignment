import "../ComponentCss/Expense.css"

export default function ExpenseTrack(props) {
    let month = props.date.toLocaleString('en - US', { month: 'long' })
    let year = props.date.getFullYear();
    let day = props.date.toLocaleString('en-US', { day: '2-digit' })
    return (
        <div className="expense">
            <div className='dstyle'>
                <div><b>{month}</b></div>
                <div>{year}</div>
                <div>{day}</div>
            </div>

            <div className="exp_desc">
                <h2>{props.exp}</h2>
                <div className="exp_pr">{props.price}</div>
            </div>
        </div>
    )
}

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