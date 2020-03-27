import secrets from "./secrets";

export function geocode(cityName, setCityWeather) {
  fetch(
    "https://geocode.xyz/" +
      cityName.replace(/ /g, "+") +
      "?json=1&auth=" +
      secrets.geocodeAuthCode
  )
    .then(response => {
      return response.json();
    })
    .then(data => {
      getWeather(data.latt, data.longt, cityName, setCityWeather);
    });
}

function getWeather(latitude, longitude, cityName, setCityWeather) {
  //   console.log(
  //     "https://api.darksky.net/forecast/" +
  //       secrets.darkSkySecretKey +
  //       "/" +
  //       latitude +
  //       "," +
  //       longitude +
  //       "?units=si"
  //   );
  fetch(
    "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" +
      secrets.darkSkySecretKey +
      "/" +
      latitude +
      "," +
      longitude +
      "?units=si"
  )
    .then(response => {
      return response.json();
    })
    .then(data => {
      setCityWeather(cityName, data);
    });
}
