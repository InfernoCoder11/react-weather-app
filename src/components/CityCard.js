import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import moment from "moment";

class CityCard extends React.Component {
  //[expanded, setExpanded] = React.useState(false);
  currently = this.props.weatherData[`${this.props.index}`]["currently"];
  expanded = false;
  handleExpandClick = () => {
    console.log("Expand Click");
    //setExpanded(!expanded);
  };
  render() {
    return (
      <Card>
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={this.props.index}
          subheader={moment().format("dddd, MMMM Do YYYY h:mm a")}
        />
        <CardMedia image="" title="" />
        <CardContent>
          <Typography variant="body2" color="textPrimary" component="p">
            {this.currently["summary"]}
          </Typography>
          <Typography variant="body2" color="textPrimary" component="p">
            Temperature : {this.currently["temperature"]} C
          </Typography>
          <Typography variant="body2" color="textPrimary" component="p">
            Humidity : {this.currently["humidity"] * 100}%
          </Typography>
          <Typography variant="body2" color="textPrimary" component="p">
            Wind Speed : {this.currently["windSpeed"]} m/s
          </Typography>
          <Typography variant="body2" color="textPrimary" component="p">
            Visibility : {this.currently["visibility"]} KM
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            onClick={this.handleExpandClick}
            aria-expanded={this.expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.expanded} timeout="auto" unmountOnExit></Collapse>
      </Card>
    );
  }
}

export default CityCard;
