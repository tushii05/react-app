import { useState } from "react";
import "./counter.css";

export const CounterChallenges = () => {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(0);

    const handleIncrement = () => {
        setCount(count + step);
    };

    const handleDecrement = () => {
        setCount(count - step);
    };

    const handleReset = () => {
        setCount(0);
    };

    return (
        <div className="counter-card">
            <h1>useState Challenges</h1>
            <p>Count: <span>{count}</span></p>
            <div>
                <label>
                    Step:
                    <input
                        type="number"
                        value={step}
                        onChange={(e) => {
                            const value = Number(e.target.value);
                            if (value >= 0 && value <= 100) setStep(value);
                        }}
                    />

                </label>
            </div>

            <div className="counter-buttons">
                <button className="increment-btn" onClick={handleIncrement} disabled={count >= 100}>Increment</button>
                <button className="decrement-btn" onClick={handleDecrement} disabled={count <= 0}>Decrement</button>
                <button className="reset-btn" onClick={handleReset}>Reset</button>
            </div>
        </div>
    );
};
