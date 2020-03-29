import React from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import CityAutocomplete from "./CityAutocomplete";
import Divider from "@material-ui/core/Divider";

class SideDrawer extends React.Component {
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
      </SwipeableDrawer>
    );
  }
}

export default SideDrawer;
