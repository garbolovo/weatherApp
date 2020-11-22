// noinspection SpellCheckingInspection
const key = "7fcGfc85aG5yAcw1XAquNvOTlsnA1whl";
// Key example 28304

// get weather information
const getWeather = async function (id) {
  const base = "https://dataservice.accuweather.com/currentconditions/v1/";
  const query = `${id}?apikey=${key}`;
  const response = await fetch(base + query);
  const data = await response.json();
  // console.log(data);
  return data;
};

// get city information
const getCity = async function (city, param) {
  const base = "https://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${key}&q=${city}`;
  const response = await fetch(base + query);
  const data = await response.json();
  console.log(data[0]);
  return [
    data[0][param],
    data[0]["EnglishName"],
    data[0]["Country"]["EnglishName"],
  ];
};

// getCity("vologda", "Key")
//   .then((data) => {
//     console.log(...data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// getWeather(28304).then((data) => {
//   // console.log(...data)
//   [weatherData] = data;
//   return weatherData;
//   // console.log(weatherData);
//   // let { WeatherIcon } = weatherData;
//   // let {
//   //   Temperature: {
//   //     Metric: { Value, Unit },
//   //   },
//   // } = weatherData;
//   // console.log(Value, Unit, WeatherIcon);
// });

// getTemp("london").then((data) => {
//   console.log(data);
//   console.log(data.length);
// });
