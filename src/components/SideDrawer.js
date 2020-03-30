import React from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import CityAutocomplete from "./CityAutocomplete";
import Divider from "@material-ui/core/Divider";
import RefreshIcon from "@material-ui/icons/Refresh";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { getWeather } from "../apiAccess";

class SideDrawer extends React.Component {
  refreshWeatherData = () => {
    this.props.cities.forEach(key =>
      getWeather(
        this.props.weatherData[key]["latitude"],
        this.props.weatherData[key]["latitude"],
        key,
        this.props.setCityWeather
      )
    );
  };
  render() {
    return (
      <SwipeableDrawer
        anchor="left"
        open={this.props.drawer}
        onClose={this.props.toggleDrawer}
        onOpen={this.props.toggleDrawer}
      >
        <CityAutocomplete
          cities={this.props.cities}
          addCity={this.props.addCity}
          setCityWeather={this.props.setCityWeather}
          setCityImage={this.props.setCityImage}
        />
        <Divider />
        <ListItem
          button
          key="refresh"
          style={{ padding: 10 }}
          onClick={this.refreshWeatherData}
        >
          <ListItemIcon>
            <RefreshIcon />
          </ListItemIcon>
          <ListItemText primary="Refresh" />
        </ListItem>
      </SwipeableDrawer>
    );
  }
}

export default SideDrawer;
