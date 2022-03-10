let weather = { /*storing the finctions and variables for API*/
    apiKey: "da4a6ce5038464971b0767a4956221ba",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=metric&appid="
            + this.apiKey
        )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed)
        document.querySelector(".city").innerText = "Weather in" + name;
        document.querySelector(".icon").src =
            "https://openweathermap.org/img/wn/" + icon + ".png"
    }
};

// https://api.openweathermap.org/data/2.5/weather?lat=0.3032&lon=51.5069&units=metric&appid=da4a6ce5038464971b0767a4956221ba
//lat=0.3032&lon=51.5069