const apiKey = '4dd5a359ac14211be909b922ae08ce23'; 
const weatherInfo = document.getElementById('weather-info');

async function fetchWeather() {
  try {
    const city = document.getElementById("destination-input").value
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    const temp = data.main.temp;
    const description = data.weather[0].description;
    document.getElementById("location").innerText = `Current Weather in ${city}`
    weatherInfo.innerHTML = `<p>Temperature: ${temp}°C</p><p>Condition: ${description}</p>`;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    weatherInfo.innerHTML = `<p>Failed to load weather data</p>`;
  }
}


const sbtn = document.getElementById("searchBTN")
sbtn.addEventListener("click", () => {
  fetchWeather()
})

function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("show");
}