//Feature 1
let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
let day = days[now.getDay()];

let replacedate = document.querySelector("#date");
replacedate.innerHTML = `${day} ${hours}:${minutes}`;

//feature 2
function enterCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-name");
  let city = searchInput.value;
  let h1 = document.querySelector("#city");
  h1.innerHTML = city;

  function showTemp(response) {
    let updatedTemp = Math.round(response.data.main.temp);
    let temp = document.querySelector("#temperature");
    temp.innerHTML = updatedTemp;
  }

  let apiKey = "caf1f1c8b723edf56ea35c0626f88b06";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemp);
}
let form = document.querySelector("#search-city");
form.addEventListener("submit", enterCity);
//API
