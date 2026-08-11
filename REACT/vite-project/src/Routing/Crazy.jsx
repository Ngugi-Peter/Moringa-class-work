import Navigation1 from './Navigation1';
import Navigation2 from './Navigation2';
import {useNavigate} from 'react-router-dom';
import{useEffect, useState} from 'react';

function Crazy() {
    const [countDown, setCountDown] = useState(5);
    const navigate = useNavigate();
    
useEffect(() => {
    const interval = setInterval(() => {
        setCountDown((count) => count - 1);
    }, 1000);
    return () => clearInterval(interval);
}, []);

useEffect(() => {
    if (countDown === 0) {
        navigate(-1);
    }
}, [countDown]);
    return (
        <div>
        <Navigation1 />
        <Navigation2 />
        <h1>Welcome to the Crazy Page</h1>
        </div>
    );
}
    export default Crazy;