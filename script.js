//https://api.openweathermap.org/data/2.5/weather?q=Paulista&units=metric&appid=a37af1b76d4d22f6b611cecc2c33eba7&lang=pt_br

//Variáveis e seleções de elementos
const apiKey = "a37af1b76d4d22f6b611cecc2c33eba7";
const cityInput = document.querySelector ("#city-input");
const searchBt = document.querySelector ("#search");

const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature span");
const descElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country");
const humidityElement = document.querySelector("#humidity span");
const windElement = document.querySelector("#wind span");

//Funções
const getWeatherData = async(city) =>{
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;
    const res = await fetch(apiWeatherURL);
    const data = await res.json();
    return data;
};
const showWeatherData = async(city) => {
    const data = await getWeatherData(city);
    cityElement.innerText = data.name;
    tempElement.innerText = parseInt(data.main.temp);
    descElement.innerText = data.weather[0].description;
    weatherIconElement.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    humidityElement.innerText = `${data.main.humidity}%`;
    windElement.innerText = `${data.wind.speed} km/h`;
};

//Eventos
searchBt.addEventListener("click", (e) => {
e.preventDefault(); //Evita o envio do formulário
console.log("teste");
const city = cityInput.value;
console.log(city);

showWeatherData(city);
})
