import React from "react";
import CityAutocomplete from "./CityAutocomplete";
import CityCard from "./CityCard";

class App extends React.Component {
  state = {
    cities: [],
    weatherData: {}
  };
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
  render() {
    return (
      <div>
        <CityAutocomplete
          cities={this.state.cities}
          addCity={this.addCity}
          setCityWeather={this.setCityWeather}
        />
        <span>
          {Object.keys(this.state.weatherData).map(key => (
            <CityCard
              key={key}
              index={key}
              weatherData={this.state.weatherData}
            />
          ))}
        </span>
      </div>
    );
  }
}

export default App;
