//https://api.openweathermap.org/data/2.5/weather?q=Paulista&units=metric&appid=a37af1b76d4d22f6b611cecc2c33eba7
//Variáveis e seleções de elementos
const apiKey = "a37af1b76d4d22f6b611cecc2c33eba7";
const cityInput = document.querySelector ("#city-input");
const searchBt = document.querySelector ("#search");


//Funções
const showWeatherData = (city) => {
    console.log(city);
}

//Eventos
searchBt.addEventListener("click", (e) => {
e.preventDefault(); //Evita o envio do formulário
console.log("teste");
const city = cityInput.value;
console.log(city);

showWeatherData(city);
})