import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import moment from "moment";

const initialState = {
  mouseX: null,
  mouseY: null
};

export default function CityCard(props) {
  const currently = props.weatherData[`${props.index}`]["currently"];
  const daily = props.weatherData[`${props.index}`]["daily"];
  // const handleClick = () => {
  // };
  const [state, setState] = React.useState(initialState);

  const contextMenuOverride = event => {
    event.preventDefault();
    setState({
      mouseX: event.clientX - 2,
      mouseY: event.clientY - 4
    });
  };

  const handleClose = () => {
    setState(initialState);
  };
  const handleRemove = cityName => {
    props.removeCity(cityName);
    setState(initialState);
  };
  const handleMoreInfo = cityName => {
    props.history.push(`/city/` + props.index);
    setState(initialState);
  };
  return (
    <div
      // onClick={handleClick}
      onContextMenu={contextMenuOverride}
      style={{ cursor: "context-menu" }}
    >
      {props.weatherData[`${props.index}`] ? (
        <Card>
          <CardMedia
            style={{ height: 0, paddingTop: "56.25%" }}
            image={props.images[`${props.index}`]}
          />
          <CardContent>
            <Typography gutterBottom variant="inherit" component="h2">
              {props.index}
            </Typography>
            <Typography component="p" color="textSecondary">
              {moment(props.weatherData[`${props.index}`]["moment"]).format(
                "dddd, MMMM Do YYYY h:mm a"
              )}
            </Typography>
            <Typography component="p" variant="body2">
              Current Temperature : {currently["temperature"]} C
            </Typography>
            <Typography component="p" variant="body2">
              Maximum Temperature : {daily["data"][0]["temperatureHigh"]} C
            </Typography>
            <Typography component="p" variant="body2">
              Minimum Temperature : {daily["data"][0]["temperatureLow"]} C
            </Typography>
            <Typography component="p" variant="body2">
              Humidity : {currently["humidity"] * 100}%
            </Typography>
            <Typography component="p" variant="body2">
              Wind Speed : {currently["windSpeed"]} m/s
            </Typography>
          </CardContent>
        </Card>
      ) : null}
      <Menu
        keepMounted
        open={state.mouseY !== null}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={
          state.mouseY !== null && state.mouseX !== null
            ? { top: state.mouseY, left: state.mouseX }
            : undefined
        }
      >
        <MenuItem onClick={() => handleRemove(props.index)}>Remove</MenuItem>
        <MenuItem onClick={() => handleMoreInfo(props.index)}>
          More Info
        </MenuItem>
      </Menu>
    </div>
  );
}
