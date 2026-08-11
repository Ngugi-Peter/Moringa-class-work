import {useEffect, useState} from "react";

function LifeCycle(){
    const [n, setN] = useState(0);
    useEffect(() => {
        console.log("The value of n has changed");
    }, [n]);
    return(
        <div>
            <div>
                <button onClick={() => setN(n + 1)}>Increment</button>
                <b> {n} </b>
                <button onClick={() => setN(n - 1)}>Decrement</button>
            </div>
            <EvenOrOdd n={n}/>
            </div>
    );
}

function EvenOrOdd(props){
    const {n} = props;
    if(n % 2 === 0){
        return <EvenComponent/>
    }
    return <OddComponent/>
}

function EvenComponent(){
        useEffect(() => {
        console.log("The value is even: ");
    }, []);
    return(
        <div>
            <h1>Even</h1>
        </div>
    );
}

function OddComponent(){
    useEffect(() => {
        return () => {
            console.log("odd component died");};
        }, []);
    return(
        <div>
            <h1>Odd</h1>
        </div>
    );
}

export default LifeCycle;