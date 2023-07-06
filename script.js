
const searchInput= document.getElementById("search-bar");
const searchBtn = document.getElementById('SearchBtn');
async function getWeather() {
    // var api_key = "0178a05a4eda46ade0bfb4a670d2fbe1";
    var responce = await fetch ("https://api.openweathermap.org/data/2.5/weather?q=Preston&appid=0178a05a4eda46ade0bfb4a670d2fbe1")
    var data = await responce.json();
    console.log(data);
    document.getElementById('celcius').innerHTML= Math.round(data.main.temp -273.15)+ "° C";
    document.getElementById('city').innerHTML= data.name;
    document.getElementById('humidity').innerHTML= data.main.humidity + "%";
    document.getElementById('winds').innerHTML= data.wind.speed + "Km/h";


}
getWeather();
// searchBtn.addEventListener('click', ()=>{
//     getWeather(searchInput.value);
// })
    