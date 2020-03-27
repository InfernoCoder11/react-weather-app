import React from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import cities from "../india-cities";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { geocode } from "../apiAccess";

class CityAutocomplete extends React.Component {
  ref = React.createRef();
  handleThis = () => {
    geocode(this.ref.current.value);
  };
  render() {
    return (
      <div>
        <Autocomplete
          id="grouped-demo"
          freeSolo={true}
          options={Object.keys(cities)}
          clearOnEscape={true}
          style={{ width: 300 }}
          renderInput={params => (
            <TextField
              {...params}
              label="City"
              inputRef={this.ref}
              variant="outlined"
            />
          )}
        />
        <Button onClick={this.handleThis}>Test API!!!</Button>
      </div>
    );
  }
}

export default CityAutocomplete;
