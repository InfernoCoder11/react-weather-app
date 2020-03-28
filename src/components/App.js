import React from "react";
import CityAutocomplete from "./CityAutocomplete";
import CityCard from "./CityCard";
import NavBar from "./NavBar";
import Grid from "@material-ui/core/Grid";

class App extends React.Component {
  state = {
    cities: [],
    weatherData: {},
    images: {}
  };
  componentDidMount() {
    const cities = localStorage.getItem("cities");
    const weatherData = localStorage.getItem("weatherData");
    const images = localStorage.getItem("images");
    if (cities) this.setState({ order: JSON.parse(cities) });
    if (weatherData) this.setState({ weatherData: JSON.parse(weatherData) });
    if (images) this.setState({ images: JSON.parse(images) });
  }

  componentDidUpdate() {
    localStorage.setItem("cities", JSON.stringify(this.state.cities));
    localStorage.setItem("weatherData", JSON.stringify(this.state.weatherData));
    localStorage.setItem("images", JSON.stringify(this.state.images));
  }
  addCity = city => {
    const cities = [...this.state.cities];
    cities.push(city);
    this.setState({ cities });
  };
  setCityWeather = (city, weather) => {
    const weatherData = { ...this.state.weatherData };
    weatherData[city] = weather;
    this.setState({ weatherData });
  };
  setCityImage = (city, link) => {
    const images = { ...this.state.images };
    images[city] = link;
    this.setState({ images });
  };
  render() {
    return (
      <div>
        <NavBar />
        <CityAutocomplete
          cities={this.state.cities}
          addCity={this.addCity}
          setCityWeather={this.setCityWeather}
          setCityImage={this.setCityImage}
        />
        <Grid container spacing={24} style={{ padding: 24 }}>
          {Object.keys(this.state.weatherData).map(key => (
            <Grid
              item
              xs={4}
              sm={4}
              lg={4}
              xl={4}
              key={key}
              style={{ padding: 5 }}
            >
              <CityCard
                index={key}
                weatherData={this.state.weatherData}
                images={this.state.images}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

export default App;
