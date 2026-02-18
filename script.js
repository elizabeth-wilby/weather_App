const API_KEY = '0588e5995f4a3ecd187e3bd864671006';

const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const weatherCard = document.getElementById('weatherCard');
const cityName = document.getElementById('cityName');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');

// calls the API function
async function getWeather() {
    const city = cityInput.value.trim();
  
    if (!city) {
      alert('Please enter a city name!');
      return;
    }
  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`;
  
    const response = await fetch(url);
    const data = await response.json();
  
    console.log(data);
    displayWeather(data);
  }
  
  // event listener 
  searchBtn.addEventListener('click', getWeather);

  // takes API data to display it
function displayWeather(data) {
    cityName.textContent = data.name;
    temperature.textContent = `Temperature: ${Math.round(data.main.temp)}°F`;
    description.textContent = `${data.weather[0].description}`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
    wind.textContent = `Wind: ${Math.round(data.wind.speed)} mph`;
  }
