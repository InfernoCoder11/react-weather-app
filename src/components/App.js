import React from "react";
import CityCard from "./CityCard";
import NavBar from "./NavBar";
import Grid from "@material-ui/core/Grid";
import SideDrawer from "./SideDrawer";

class App extends React.Component {
  state = {
    cities: [],
    weatherData: {},
    images: {},
    drawer: false
  };
  componentDidMount() {
    const cities = localStorage.getItem("cities");
    const weatherData = localStorage.getItem("weatherData");
    const images = localStorage.getItem("images");
    if (cities) this.setState({ cities: JSON.parse(cities) });
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
  toggleDrawer = () => {
    if (this.state.drawer) this.setState({ drawer: false });
    else this.setState({ drawer: true });
  };
  render() {
    return (
      <div>
        <NavBar toggleDrawer={this.toggleDrawer} />
        <SideDrawer
          drawer={this.state.drawer}
          toggleDrawer={this.toggleDrawer}
          cities={this.state.cities}
          addCity={this.addCity}
          setCityWeather={this.setCityWeather}
          setCityImage={this.setCityImage}
        />
        <Grid container style={{ padding: 24 }}>
          {Object.keys(this.state.weatherData).map(key => (
            <Grid
              item
              xs={12}
              sm={6}
              lg={4}
              xl={3}
              key={key}
              style={{ padding: 5 }}
            >
              <CityCard
                index={key}
                history={this.props.history}
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
