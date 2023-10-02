setTimeout(function () {
    const container = document.querySelector(".container");
    container.classList.add("show");
}, 2000);

function convertTemperature() {
    const temperatureInput = document.getElementById("temperature");
    const selectedUnit = document.getElementById("unit").value;
    const resultElement = document.getElementById("result");

    const temperature = parseFloat(temperatureInput.value);

    if (isNaN(temperature)) {
        resultElement.textContent = "Please enter a valid number.";
        return;
    }

    let result;

    if (selectedUnit === "celsius") {
        result = (temperature * 9/5) + 32;
        resultElement.textContent = `${temperature}°C is equal to ${result.toFixed(2)}°F`;
    } else if (selectedUnit === "fahrenheit") {
        result = (temperature - 32) * 5/9;
        resultElement.textContent = `${temperature}°F is equal to ${result.toFixed(2)}°C`;
    } else if (selectedUnit === "kelvin") {
        result = temperature - 273.15;
        resultElement.textContent = `${temperature} K is equal to ${result.toFixed(2)}°C`;
    }

    temperatureInput.value = "";
    document.getElementById("unit").value = "";

    setTimeout(function () {
        resultElement.textContent = "";
    }, 2000);
}