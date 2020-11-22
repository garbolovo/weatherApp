const form = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details");
const timeEl = document.querySelector("img.time");
const iconEl = document.querySelector(".icon img");

const updateUI = (data) => {

  //time img setting
  let timeSrc = data[0] ? 'img/day.svg' : 'img/night.svg'
  let iconSrc = data[4]
  timeEl.setAttribute('src', timeSrc)
  iconEl.setAttribute('src', `img/icons/${iconSrc}.svg`)

  console.log(data);
  details.innerHTML = `
      <div class="my-5">
        <h5 class="my-1">${data[1]}</h5>
        <p class="my-1">${data[2]}</p>
      </div>
      <div class="my-3">${data[5]}</div>
      <div class="display-4 my-4">
        <span>${data[3]}</span>
        <span>&deg;C</span>
      </div>
    `;
};


const getTemp = async function (cityName) {
  let cityData = await getCity(cityName, "Key");
  let [weatherData] = await getWeather(cityData[0]);
  let cityDataName = cityData[1];
  let countryDataName = cityData[2];
  console.log(weatherData);
  let {IsDayTime} = weatherData;
  let {Temperature} = weatherData;
  let {WeatherIcon} = weatherData;
  let {WeatherText} = weatherData;
  let {
    Metric: {Value: T},
  } = Temperature;
  return [
    IsDayTime, //0
    cityDataName, //1
    countryDataName, //2
    T, //3
    WeatherIcon, //4
    WeatherText, //5
  ];
};

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let city = form.city.value.trim();
  form.reset();
  if (card.classList.contains('d-none')) {
    card.classList.remove('d-none')
  }
  getTemp(city).then(fullData => {
    updateUI(fullData)
  }).catch(err => {
    console.log(err)
  })


});
