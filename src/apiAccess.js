import secrets from "./secrets";

export function geocode(cityName) {
  var request = new XMLHttpRequest();

  request.open(
    "GET",
    "https://geocode.xyz/" +
      cityName.replace(/ /g, "+") +
      "?json=1&auth=" +
      secrets.geocodeAuthCode,
    true
  );

  request.onload = function() {
    const data = JSON.parse(this.response);
    getWeather(data.latt, data.longt);
  };

  request.send();
}

function getWeather(latitude, longitude) {
  var request = new XMLHttpRequest();

  request.open(
    "GET",
    "https://api.darksky.net/forecast/" +
      secrets.darkSkySecretKey +
      "/" +
      latitude +
      "," +
      longitude +
      "?units=si",
    true
  );

  request.onload = function() {
    console.log(JSON.parse(this.response));
  };

  request.send();
}
