const form = document.getElementById("input")

form.addEventListener("submit", function (event) {
    // Prevent the page from refreshing
    event.preventDefault();

    // Get the values
    const value1 = document.getElementById("input1").value;
    const value2 = document.getElementById("input2").value;

    console.log(value1);
    console.log(value2);
});