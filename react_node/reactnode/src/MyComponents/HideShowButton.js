import React, { useState } from 'react';

function HideShow() {
    let [value, setValue] = useState(true)
    return (
        <>
            {value ? <h1> Brillica Services </h1> : <h1> null </h1>}
            <button onClick={() => {setValue(false) }}>Hide</button>
            <button onClick={() => {setValue(true) }}>show</button>
        </>
    )
}
export default HideShow;