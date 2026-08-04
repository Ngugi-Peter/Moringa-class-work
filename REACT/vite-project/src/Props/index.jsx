function Parent (){
const str = "Hey how are you."
const num = 3000;
const boolean = true;
const empty = null;
const car = {
    name: "BMW",
    model: "X5",
    year: 2023,
    engine: {
        type: "V8",
        cc: 2800,
    },
    
};
const colors = ["red", "blue", "green", "yellow"];
    return(
        <div>
            <h1>I am the Parent oponent</h1>
            <Child str={str} num={num} boolean={boolean} empty={empty}/>
            <Child2 str={str} num={num} boolean={boolean} empty={empty} car={car} colors={colors} obj={{name:"",value:""}}/>
            <Child3 str={str} num={num} boolean={boolean} empty={empty}/>
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

function Child2(props){
    const {str, num, boolean, empty} = props;
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
function Child3({str, num, boolean, empty}) {
    return(
        <div>
            <h1>I am a child component</h1>
            <ul>
                <li>Favourite String <b>{str}</b></li>
                <li>num <b>{num}</b></li>
                <li>boolean <b>{String(boolean)}</b></li>
                <li>Empty <b>{empty}</b></li>
            </ul>
        </div>
    )
}

export default Parent;