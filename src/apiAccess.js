import secrets from "./secrets";

export function geocode(cityName) {
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
      getWeather(data.latt, data.longt);
    });
}

function getWeather(latitude, longitude) {
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
      console.log(data);
    });
}
