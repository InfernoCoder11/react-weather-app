import React from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import worldCities from "../india-cities";
import TextField from "@material-ui/core/TextField";

class CityAutocomplete extends React.Component {
  render() {
    return (
      <Autocomplete
        id="grouped-demo"
        freeSolo={true}
        options={Object.keys(worldCities)}
        groupBy={option => option.firstLetter}
        getOptionLabel={option => option}
        style={{ width: 300 }}
        renderInput={params => (
          <TextField {...params} label="City" variant="outlined" />
        )}
      />
    );
  }
}

export default CityAutocomplete;
