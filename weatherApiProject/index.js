let searchBox = document.querySelector('#searchbox');
let searchBtn  = document.querySelector('#search-btn');
let queried_city = document.querySelector('.city');
let temp = document.querySelector('.temp');
let humidity = document.querySelector('.humidity');
let windspeed = document.querySelector('.windspeed');
let image = document.querySelector('.image')


const api_key = "28e7a383e982734129c3030b0190b56b";
const api_url =
    "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
  
async function fetchdata(city) {
    let response = await fetch(api_url + city + `&appid=${api_key}`);
    var data = await response.json();

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".main").style.display = "none";
        document.querySelector(".footer").style.display = "none";
    
    }
    else {
        console.log(data);
        queried_city.innerHTML = data.name;
        temp.innerHTML = data.main.temp + " deg c";
        humidity.innerHTML = data.main.humidity + "%";
        windspeed.innerHTML = data.wind.speed + " km/hr";
        document.querySelector(".main").style.display = "block";
        document.querySelector(".footer").style.display = "block";
        document.querySelector(".error").style.display = "none";

        switch (data.weather[0].main) {
            case "Clouds":
                image.src = "images/clouds.png";
                break;
            case "Clear":
                image.src = "images/clear.png";
                break;

            case "Rain":
                image.src = "images/rain.png";
                break;

            case "Drizzle":
                image.src = "images/drizzle.png";
                break;

            case "Mist":
                image.src = "images/mist.png";
                break;
        }

    
        // if (data.weather[0].main == "Clouds") {
        //   image.src = "images/clouds.png";
        // } else if (data.weather[0].main == "Clear") {
        //   image.src = "images/clear.png";
        // } else if (data.weather[0].main == "Rain") {
        //   image.src = "images/rain.png";
        // } else if (data.weather[0].main == "Drizzle") {
        //   image.src = "images/drizzle.png";
        // } else if (data.weather[0].main == "Mist") {
        //   image.src = "images/mist.png";
        // }

    }
}
searchBtn.addEventListener("click", function () {
  fetchdata(searchBox.value);
});



