const apiKey = "a95871dd561cd3081ea9e91018a0c3f0";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status == 404) {
        document.querySelector(".error").style.display="block"
        document.querySelector(".weather").style.display="none"

    }
    else{

        var data = await response.json();

        console.log(data);
    document.querySelector(".city").textContent = data.name;
    document.querySelector(".temp").textContent = Math.ceil(data.main.temp) + "°C";
    document.querySelector(".humidity").textContent = Math.ceil(data.main.humidity) + "%";
    document.querySelector(".wind").textContent = Math.ceil(data.wind.speed) + " km/h";
    if (data.weather[0].main == 'Cloudy') {
        weatherIcon.src = "images/clouds.png"
    }
    else if (data.weather[0].main == 'Clear') {
        weatherIcon.src = "images/clear.png"
    }
     else if (data.weather[0].main == 'Drizzle') {
        weatherIcon.src = "images/drizzle.png"
    }
     else if (data.weather[0].main == 'Rain') {
        weatherIcon.src = "images/rain.png"
    }
    else if (data.weather[0].main == 'Mist') {
        weatherIcon.src = "images/mist.png"
    }

    document.querySelector(".weather").style.display="block"
     document.querySelector(".error").style.display="none"
    }
    

    

}

searchbtn.addEventListener('click', () => {
    checkWeather(searchbox.value);

})

