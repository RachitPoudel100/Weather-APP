
const searchInput= document.getElementById("search-bar");
const searchBtn = document.getElementById('SearchBtn');
const image = document.getElementById('icon');
const d = new Date();
  async function getWeather_default() {
    var responce = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=Preston&appid=0178a05a4eda46ade0bfb4a670d2fbe1`)
    var data = await responce.json();
    console.log(data);
    document.getElementById('celcius').innerHTML= Math.round((data.main.temp -273.15)) +"° C";
    document.getElementById('city').innerHTML= data.name;
    document.getElementById('humidity').innerHTML= data.main.humidity + "%";
    document.getElementById('win').innerHTML= data.wind.speed + "Km/h";
    document.getElementById('press').innerHTML= data.main.pressure+ "hPa";
    document.getElementById('description').innerHTML=data.weather[0].description;
    document.getElementById("date").innerHTML = d;

    switch (data.weather[0].main) {
      case 'Clouds':
          image.src = '../Images/cloudy-9953.jpg';
            break;
        case 'Clear':
          image.src = '../Images/Sunny.png';
            break;
        case 'Rain':
          image.src ='../Images/Rainny.png';
            break;
        case'thunder':
          image.src='../Image/Thunder.png';
            break;
                
    }
  }
getWeather_default();

async function getWeather_City(city) {
  var api_key = "0178a05a4eda46ade0bfb4a670d2fbe1";
  var responce = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`)
  if(responce.status == "404"){
    document.getElementById("error").style.display="block"; 
  }
  else{
  var data = await responce.json();
  console.log(data);
  document.getElementById('celcius').innerHTML= Math.round((data.main.temp -273.15))+ "° C";
  document.getElementById('city').innerHTML= data.name;
  document.getElementById('humidity').innerHTML= data.main.humidity + "%";
  document.getElementById('win').innerHTML= data.wind.speed + "Km/h";
  document.getElementById('press').innerHTML= data.main.pressure+ "hPa";
  document.getElementById('description').innerHTML=data.weather[0].description;

  switch (data.weather[0].main) {
    case 'Clouds':
        image.src = '../Images/cloudy-9953.jpg';
          break;
      case 'Clear':
        image.src = '../Images/Sunny.png';
          break;
      case 'Rain':
        image.src ='../Images/Rainny.png';
          break;
      case'thunder':
        image.src='../Image/Thunder.png';
          break;  
  }
  document.getElementById("error").style.display="none";          
  }
}
searchBtn.addEventListener('click', ()=>{
    getWeather_City(searchInput.value);
})