import React from "react";
import CityAutocomplete from "./CityAutocomplete";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>React Weather App!</h1>
        <CityAutocomplete />
      </div>
    );
  }
}

export default App;
