let weather = { /*storing the finctions and variables for API*/
    "apiKey": "da4a6ce5038464971b0767a4956221ba",
    fetchWeather: function () {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?lat=0.3032&lon=51.5069&units=metric&appid=da4a6ce5038464971b0767a4956221ba"
        )
            .then((response) => response.json())
            .then((data) => console.log(data));
    },
};