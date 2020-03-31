import secrets from "./secrets";
import moment from "moment";

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

export function getWeather(latitude, longitude, cityName, setCityWeather) {
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
      data["moment"] = moment();
      setCityWeather(cityName, data);
    });
}

export function getImage(cityName, setCityImage) {
  fetch(
    "https://api.unsplash.com/search/photos?page=1&query=" +
      cityName +
      "+City" +
      "&client_id=" +
      secrets.unsplashAccessKey
  )
    .then(response => {
      return response.json();
    })
    .then(data => {
      const images = [];
      data.results.forEach(image => {
        images.push(image["urls"]["regular"]);
      });
      setCityImage(cityName, images);
    });
}
