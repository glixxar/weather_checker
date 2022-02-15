

$( document ).ready(function() {
    let queryUrl = "https://api.openweathermap.org/data/2.5/weather?";
    let city = "q=Brisbane&";
    let apiOptions = "units=metric&";
    let apiKey = "appid=82f64da34251b0e58e057d344f3307a1";
    let json = queryUrl + city + apiOptions + apiKey;
    const spinner = document.getElementById("spinner");

    fetch(json)
      .then((response) => response.json())
      .then((data) => {
          setWeather(data);
      });
});

function changeCity(){
    var x = document.getElementById("new-city").value;
    let queryUrl = "https://api.openweathermap.org/data/2.5/weather?";
    let city = "q=" + x + "&";
    let apiOptions = "units=metric&";
    let apiKey = "appid=82f64da34251b0e58e057d344f3307a1";
    let json = queryUrl + city + apiOptions + apiKey;
    spinner.removeAttribute('hidden');
    fetch(json)
    .then((response) => response.json())
    .then((data) => {
        spinner.setAttribute('hidden', '');
        setWeather(data);
    });
}

function setWeather(data){
     // Weather main data
     let main_weather = data.weather[0].main;
     let weather_description = data.weather[0].description;

     // Weather temperature
     let temperature = data.main.temp;
     let feels_like = data.main.feels_like;
     let temp_min = data.main.temp_min;
     let temp_max = data.main.temp_max;
     let humidity = data.main.humidity;
     document.getElementById("weather_description").innerHTML=weather_description;
     document.getElementById("temperature").innerHTML=temperature.toFixed() + "°C";    
     document.getElementById("feels_like").innerHTML="Feels Like: " + "<strong>" +feels_like.toFixed() + "°<strong>";
     document.getElementById("humidity").innerHTML="Humidity: "+ "<strong>"+humidity + "%<strong>";
     document.getElementById("max_min").innerHTML="<strong>"+temp_min.toFixed()+ "/"+temp_max.toFixed() + "°";

     let city = data.name;
     let sunrise = new Date(data.sys.sunrise * 1000);
     let sunset =  new Date(data.sys.sunset * 1000);
     document.getElementById("sunrise").innerHTML= "Sunrise: <strong>" + sunrise.getHours() + ":" + ('0'+sunrise.getMinutes()).slice(-2) + "<strong>";
     document.getElementById("sunset").innerHTML= "Sunset: <strong>" + (sunset.getHours())+ ":" + ('0'+sunset.getMinutes()).slice(-2) + "<strong>";
     document.getElementById("city").innerHTML=city;
 
     // Backgrounds
     switch (main_weather) {
     case "Snow":
         document.getElementById("wrapper").style.backgroundImage =
         "url('assets/snow_morning.jpg')";
         document.getElementById("weather_img").src="http://openweathermap.org/img/wn/13n@2x.png"
         break;
     case "Clouds":
         document.getElementById("wrapper").style.backgroundImage =
         "url('assets/cloudy_morning.jpg')";
         document.getElementById("weather_img").src="http://openweathermap.org/img/wn/03d@2x.png"
         break;
     case "Fog":
         document.getElementById("wrapper").style.backgroundImage =
         "url('assets/mist.jpg')";
         document.getElementById("weather_img").src="http://openweathermap.org/img/wn/50d@2x.png"
         break;
     case "Rain":
         document.getElementById("wrapper").style.backgroundImage =
         "url('assets/rain_morning.jpg')";
         document.getElementById("weather_img").src="http://openweathermap.org/img/wn/10d@2x.png"
         break;
     case "Clear":
         document.getElementById("wrapper").style.backgroundImage =
         "url('assets/clear_morning.jpg')";
         document.getElementById("weather_img").src="http://openweathermap.org/img/wn/01d@2x.png"
         break;
     case "Thunderstorm":
         document.getElementById("wrapper").style.backgroundImage =
         "assets/thunderstorm.jpg";
         document.getElementById("weather_img").src="http://openweathermap.org/img/wn/11d@2x.png"
         break;
     default:
         document.getElementById("wrapper").style.backgroundImage =
         "assets/clear_morning.jpg";
         document.getElementById("weather_img").src="http://openweathermap.org/img/wn/01d@2x.png"
         break;
     }
   
    return;
}
