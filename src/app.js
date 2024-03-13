function getCityData(city) {
     let apiKey = "7d4d0f8bca21ta4eb4313oad2f2b1ec4";
     let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&unit=metric`;
     axios.get(apiUrl).then(refreshWeather);
}



function handleSearch(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = searchInput.value;
    getCityData(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearch);