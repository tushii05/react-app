import { useState } from "react";

export const CounterChallenges = () => {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(0)

    const handleIncrement = () => {
        setCount(count + step)
    }
    const handleDecrement = () => {
        setCount(count - step)
    }

    const handleReset = () => {
        setCount(0)
    }

    return (
        <div>
            <h1>useState Challenges</h1>
            <p>Count: <spam>{count}</spam></p>
            <div>
                <label>
                    Step:
                    <input type="number" value={step} onChange={(e) => setStep(Number(e.target.value))} />

                </label>
            </div>


            <div className="">
                <button onClick={handleIncrement} disabled={count >= 0}>Increment</button>
                <br />
                <button onClick={handleDecrement} disabled={count <= 0}>Decrement</button>
                <br />
                <button onClick={handleReset}>Reset</button>
            </div>

        </div>
    )
}