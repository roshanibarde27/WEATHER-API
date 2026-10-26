function fetchData() {
    fetch("http://localhost:3000/weather")
        .then((res) => res.json())
        .then((data) => displayData(data))
        .catch((err) => console.log(err));
}

fetchData();

function displayData(data) {
    document.getElementById("weatherContainer").innerHTML = "";

    data.map((el) =>
        card(el.city, el.temperature, el.condition, el.humidity, el.wind, el.image)
    );
}

function card(city, temperature, condition, humidity, wind, image) {
    let store = `
        <div class="card">
            <img src="${image}" alt="${city}">
            <div class="content">
                <h2>${city}</h2>
                <p><strong>🌡 Temperature:</strong> ${temperature}°C</p>
                <p><strong>☁ Condition:</strong> ${condition}</p>
                <p><strong>💧 Humidity:</strong> ${humidity}%</p>
                <p><strong>💨 Wind:</strong> ${wind} km/h</p>
            </div>
        </div>
    `;

    document.getElementById("weatherContainer").innerHTML += store;
}