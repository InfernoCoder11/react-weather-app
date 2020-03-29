import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import moment from "moment";

class CityCard extends React.Component {
  currently = this.props.weatherData[`${this.props.index}`]["currently"];
  daily = this.props.weatherData[`${this.props.index}`]["daily"];
  handleClick = () => {
    this.props.history.push(`/city/` + this.props.index);
  };
  render() {
    return (
      <div
        onClick={this.handleClick}
        onContextMenu={() => console.log("Right Click On " + this.props.index)}
      >
        {this.props.weatherData[`${this.props.index}`] ? (
          <Card>
            <CardMedia
              style={{ height: 0, paddingTop: "56.25%" }}
              image={this.props.images[`${this.props.index}`]}
            />
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
                {this.props.index}
              </Typography>
              <Typography component="p" color="textSecondary">
                {moment(
                  this.props.weatherData[`${this.props.index}`]["moment"]
                ).format("dddd, MMMM Do YYYY h:mm a")}
              </Typography>
              <Typography component="p" variant="body2">
                Current Temperature : {this.currently["temperature"]} C
              </Typography>
              <Typography component="p" variant="body2">
                Maximum Temperature : {this.daily["data"][0]["temperatureHigh"]}{" "}
                C
              </Typography>
              <Typography component="p" variant="body2">
                Minimum Temperature : {this.daily["data"][0]["temperatureLow"]}{" "}
                C
              </Typography>
              <Typography component="p" variant="body2">
                Humidity : {this.currently["humidity"] * 100}%
              </Typography>
              <Typography component="p" variant="body2">
                Wind Speed : {this.currently["windSpeed"]} m/s
              </Typography>
            </CardContent>
          </Card>
        ) : null}
      </div>
    );
  }
}

export default CityCard;
