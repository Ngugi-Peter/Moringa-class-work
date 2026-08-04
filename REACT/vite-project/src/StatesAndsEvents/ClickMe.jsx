import { useState } from "react";
function clickMe() {
    const[count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        setCount(count - 1);
    };
    const reset = () => {
        setCount(0);
    };
    const spoil = ( ) =>{
        setCount("Cats and dogs")
    };
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <button onClick={spoil}>Spoil</button>
        </div>
    );

}
export default clickMe;