let search_input = document.getElementById("search-input");
let search_btn = document.getElementById("search-btn");
let datos = document.getElementById("datos");

let data_obj = {};
let city_name = null;
const get_data_api = (ciudad) => {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      ciudad +
      "&appid={api_key}"
  )
    .then((d) => d.json())
    .then((data) => {
      data_obj = data.main;
      city_name = data.name;
      pintar_datos();
    });
};

const pintar_datos = () => {
  datos.innerHTML = "";
  datos.insertAdjacentHTML(
    "beforeend",
    `
        <h2>${city_name}</h2>
        <ul>
            <li>humedad: ${data_obj.humidity} %</li>
            <li>Presión: ${data_obj.pressure} hPa</li>
            <li>Temperatura: ${data_obj.temp} °K</li>
            <li>Nivel del mar: ${data_obj.sea_level} hPa</li>
        </ul>
    `
  );
};

get_data_api("puno");

search_btn.addEventListener("click", () => {
  if (search_input.value.trim()) {
    get_data_api(search_input.value);
    search_input.value = "";
  }
});
