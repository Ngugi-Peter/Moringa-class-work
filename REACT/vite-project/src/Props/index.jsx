function Parent (){
const str = "Hey how are you."
const num = 3000;
const boolean = true;
const empty = null;
    return(
        <div>
            <h1>I am the Parent oponent</h1>
            <Child str={str} num={num} boolean={boolean} empty={empty}/>
        </div>
    )
}

function Child (props){
    console.log(props);
    return(
        <div>
            <h1>I am a child compnent</h1>
            <ul>
                <li>Favourite String <b>{props.str}</b></li>
                <li>num <b>{props.num}</b></li>
                <li>boolean <b>{String(props.boolean)}</b></li>
                <li>Empty <b>{props.empty}</b></li>
            </ul>
            </div>
    )
}

export default Parent;