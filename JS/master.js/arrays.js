let car = {
    name: "Porsche",
    model: "911",
    year: 2020,
    color: "red",
    cylinders: 6,
    "top speed": 200,

    manufacturer: {
        name: "Porsche AG",
        country: "Germany",
        "plate number": 2354632,
        "registration number": "292",
        "fun fact": `Another interesting fact: the 911 was almost called the 901.
When Porsche introduced the car in 1963, it was named the 901. However,
Peugeot held trademark rights in France for three-digit car names
with a zero in the middle (like 404 or 504).`
    },

    alert: function () {
        console.log(this);
    }
    [9, 11, 22, 10]
};

car.alert();
console.log(car.manufacturer["fun fact"]);
console.table(car)