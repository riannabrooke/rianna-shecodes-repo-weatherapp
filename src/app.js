function refreshWeather(response) {
    console.log(response.data)
    let temperatureElement = document.querySelector("#temperature-value");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#city");
    let city = response.data.city;
    let descriptionElement = document.querySelector("#description");
    let description = response.data.condition.description;
    let humidityElement = document.querySelector("#humidity");
    let humidity = `${response.data.temperature.humidity}%`;
    let windSpeedElement = document.querySelector("#wind-speed");
    let windSpeed = `${response.data.wind.speed}km/h`;
    let timeElement = document.querySelector("#time");
    let time = new Date (response.data.time * 1000);
    let iconElement = document.querySelector("#icon");
    let icon = `<img src="${response.data.condition.icon_url}"/>`;


    cityElement.innerHTML = city;
    temperatureElement.innerHTML = Math.round(temperature);
    descriptionElement.innerHTML = description;
    humidityElement.innerHTML = humidity;
    windSpeedElement.innerHTML = windSpeed;
    timeElement.innerHTML = formatDate(time);
    iconElement.innerHTML = icon;
}

function formatDate(time) {
    let minutes = time.getMinutes();
    let hours = time.getHours();
    let days =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[time.getDay()];

    if (minutes > 10) {
        minutes = `0${minutes}`;
    }

    return `${day} ${hours}:${minutes}`;
}

function getCityData(city) {
     let apiKey = "7d4d0f8bca21ta4eb4313oad2f2b1ec4";
     let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&unit=metric`;
     axios.get(apiUrl).then(refreshWeather);
}

function handleSearch(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
    getCityData(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearch);


getCityData("Valencia");