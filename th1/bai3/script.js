document.addEventListener("DOMContentLoaded", function() {
    fetchWeatherData();
});

function fetchWeatherData() {
    const apiKey = "4ae04986f307408ba4222015240104";
    const apiUrl = "https://api.weatherapi.com/v1/current.json?q=HaNoi&key=" + apiKey;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            displayWeatherInfo(data);
        })
        .catch(error => {
            console.error("There was a problem fetching the weather data:", error);
        });
}

function displayWeatherInfo(data) {
    const weatherInfo = document.getElementById("weather-info");
    weatherInfo.innerHTML = `
        <h2>Location: ${data.location.name}, ${data.location.country}</h2>
        <p>Local time: ${data.location.localtime}</p>
        <h3>Current Weather:</h3>
        <p>Temperature: ${data.current.temp_c}°C</p>
        <p>Condition: ${data.current.condition.text}</p>
        <img src="${data.current.condition.icon}" alt="${data.current.condition.text}">
    `;
}
