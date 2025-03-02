import { useState } from "react";
export const States = () => {
    const [count, setCount] = useState(0);

    const handleCount = () => {
        setCount(() => count + 1);
    };


    return (
        <>
            <div>
                <h1>{count}</h1>
                <button onClick={handleCount}>Increment </button>
            </div>
            <ChildComponent count={count} />
        </>
    )
}


function ChildComponent({ count }) {
    console.log('Child Component Render')
    return (
        <>
            <h2>Child Component - {count}</h2>
        </>
    )
}