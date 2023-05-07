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