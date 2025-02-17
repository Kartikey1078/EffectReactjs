import React, { useEffect, useState } from 'react';
import './CounterEffect.css'

function CounterEffect() {
    let [count, setCounting] = useState({ count: 0, isCounting: false });

    useEffect(() => {
        let interval;
        if (count.isCounting) {
            interval = setInterval(() => {
                setCounting((prev) => ({
                    ...prev,
                    count: prev.count + 1
                }));
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [count.isCounting]);

    function startCounting() {
        setCounting((prev) => ({
            ...prev,
            isCounting: true
        }));
    }

    function stopCounting() {
        setCounting((prev) => ({
            ...prev,
            isCounting: false
        }));
    }

    function reset() {
        setCounting((prev) => ({
            ...prev,
            isCounting: false,
            count: 0
        }));
    }

    return (
        <div className="counter-container">
            <h3 className='h3'>Auto Increment Counter</h3>
            <p className="count-display">{count.count}</p>
            <div className="button-container">
                <button onClick={startCounting} className="button start">START</button>
                <button onClick={stopCounting} className="button stop">STOP</button>
                <button onClick={reset} className="button reset">RESET</button>
            </div>
        </div>
    );
}

export default CounterEffect;
