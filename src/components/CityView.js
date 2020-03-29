import React from "react";

//this.props.match.params.cityName

class CityView extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.match.params.cityName} Weather</h1>
      </div>
    );
  }
}

export default CityView;
