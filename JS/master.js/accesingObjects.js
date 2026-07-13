const car = {
    name : "porsche",
    model : "911",
    year : 2020,
    color : "red",
    cylinders : 6,
    "top speed": 200,

    manufacturer : {
        name : "porsche AG",
        country : "Germany",
        "plate number" : 2354632,
        alert : function() {
            console.log(car);
        }
     
    }, 
    engine_details : {
       type: "Twin-turbocharged flat-six (Boxer)",
        displacement: "3.0 L",
        cylinders: 6,
        horsepower: 379,
        torque: "450 Nm",
        fuelType: "Petrol",
        aspiration: "Twin Turbo",
        transmission: "8-speed PDK automatic",
        drivetrain: "Rear-Wheel Drive (RWD)",
        cooling: "Liquid-cooled",
        fuelInjection: "Direct Fuel Injection (DFI)",

    }, 
    "fun fact" : 
    `Another interesting fact: the 911 was almost called the 901.
    When Porsche introduced the car in 1963, it was named the 901. However, 
    Peugeot held trademark rights in France
    for three-digit car names with a zero in the middle (like 404 or 504)` 

}
console.log(`this type is ${typeof car}`)
console.table(car)
/* accessing individua parts of your object
2 ways of accessing object properties
   1.dot natation
   does not work with properties such as a) numbers 
   b) strimgs with spaces starting with numbers or a special symbol
   exercise access each property using dot and bracket*/
   //dot notation
   console.log(`name is ${car.name} its type is ${typeof car.name}`)
   //brackets notation
   console.log(`name is ${car["name"]} its type is ${typeof car["name"]}`)
   //dot 
   console.log(`model is ${car.model} its type is ${typeof car.model}`)
   //bracket
   console.log(`model is ${car["model"]} its type is ${typeof car["model"]}`)
   //dot
   console.log(`top speed is ${car.top_speed} its type is ${typeof car.top_speed}`)
   const v2 = car['top_speed']
   //brackets
   console.log(`top speed is ${v2} its type is ${v2}`)
//dot
console.log(`Engine is ${car.engine_details} its type is ${typeof engine_details}`)
const v1 = car['engine_details']
console.log(`top speed is ${v1} its type is ${v1}`)
//dot
console.log(`manufacture  is ${car.manufacturer} its type is ${car.manufacturer}`)

const v3 = car['manufacture']

//brackets
console.log(`manufacture  is, ${v3} its type is ${v3}`)