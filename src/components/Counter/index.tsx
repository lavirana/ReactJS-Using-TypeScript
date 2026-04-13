import React, { useState } from "react";

const Counter: React.FC = (props) => {
   //let counter = 0;
    let [counter, setValue] = useState(0);

    const handleDecrement = () => {
        if(counter === 0) return;
        setValue(counter - 1);
    }

    return (
        <div className="counter-container">
            <h1>{counter}</h1>
            <button onClick={(e) => setValue(counter+1)} style={{ background: "lightgreen" }} >INCREMENT</button>
            <button onClick={handleDecrement} style={{ background: "tomato" }} >DECREMENT</button>
        </div>
    );
};

export default Counter;