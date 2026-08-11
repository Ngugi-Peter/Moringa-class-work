import {useState, useEffect} from "react";

function StopWatch(){
    const [isStopped, setIsStopped] = useState(true);
    const [k,setK] = useState(0);
    useEffect(() => {
    if (!isStopped === false) {
        setK(k + 1);
    }}, [isStopped]);

    return(
        <diV>
            <div>
                <button onClick={() => setIsStopped(false)}>Start</button>
                <button onClick={() => setIsStopped(true)}>Stop</button>
            </div>
            <div>Start clicked how many times{k}</div>
            <ShowTime isStopped={isStopped} k={k}/>
        </diV>
    );
}

function ShowTime({isStopped, k}){
    if (isStopped) {
        return null;
    }
    return<timmer k={k}/>
}

function timmer({k}){
    const [time, setTime] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(time + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [time]);