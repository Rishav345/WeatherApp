const apiKey = "7ec71e303b57b62f3d6b46437fbf6da6";
const apiURL = " https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const wIcon = document.querySelector(".imgs");
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {
    const response = await fetch(apiURL + city + `&appid=${apiKey}`)
    var data = await response.json();

    if (response.status == 404) {

        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";


    }
    else {
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".windspeed").innerHTML = data.wind.speed + "km/h";

        if (data.weather[0].main == "Clear") {
            wIcon.src = "images/clear.png";
        }
        else if (data.weather[0].main == "Clouds") {
            wIcon.src = "images/clouds.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            wIcon.src = "images/drizzle.png";
        }
        else if (data.weather[0].main == "Mist") {
            wIcon.src = "images/mist.png";
        }
        else if (data.weather[0].main == "Rain") {
            wIcon.src = "images/mist.png";
        }
        else if (data.weather[0].main == "Snow") {
            wIcon.src = "images/snow.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";


    }


}
const search = document.querySelector(".card input");


searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})

searchBox.addEventListener("keydown",(e)=> {
    if(e.key == "Enter"){
        checkWeather(searchBox.value);
    }
});
