function Mapping() {
    const numbers = [1, 2, 3, 4, 5];
    let x = number.forEach((element) => {
        console.log("Element is", element);
        return "thi is n";
});
console.log("x is", x);
const powerOfNumber = numbers.map((n) => {
    console.log("this is", n);
    return n * n;
});


const justMap = numbers.map(() =>"cats and dogs");
console.log(powerOfNumber);
console.log(justMap);

const color = ["red", "blue", "green", "yellow"];
 function singleColor(c, i){
    if(i ===1){
        return null;
    }
    return (
        <div key={i}>
            for index <b>{i}</b> the color is <b>{c}</b>
        </div>
    );
}
return( 
    <div>
        <h1>Mapping</h1>
        <h4>using arrow functions</h4>
        {color.map((c, i) => {
            return (
                <div key={i}>
                    for index <b>{i}</b> the color is <b>{c}</b>
                </div>
            );
        })}
        <h4>using arrow functions</h4>
        {color.map(function(c, i) {
            return (
                <div key={i}>
                    for index <b>{i}</b> the color is <b>{c}</b>
                </div>
            );
        })}
        <h4>using a function</h4>
        {color.map(singleColor)}

        <h4>using a component</h4>
        {color.map((c, i) => (
            <SingleColorComponent c={c} i={i} key={i} />
        ))}
    </div>
);
}

function singleColorComponent(props) {
const { c, i } = props;
return (
    <div>
        for index <b>{i}</b> the color is <b>{c}</b>
    </div>
);
}

export default Mapping;
    