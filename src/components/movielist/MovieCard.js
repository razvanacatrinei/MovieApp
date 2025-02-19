import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Typography,
} from "@material-ui/core";

import { useHistory } from "react-router-dom";

import Rating from "./Rating";

import { formatDate } from "../../utils/dateUtils";

const MovieCard = (props) => {
  const { movie, changeRating, onDeleteItem } = props;
  let history = useHistory();
  return (
    <Card>
      <CardActionArea>
        <CardContent>
          <CardMedia image="" description=" movie poster"></CardMedia>
          <Typography variant="h5">{movie.original_title}</Typography>
          <Typography variant="body2" color="textSecondary">
            {formatDate(movie.release_date)}
          </Typography>
          <div>
            <Rating
              userRating={props.movie.userRating}
              changeRating={changeRating}
              movieId={movie.id}
            />
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="secondary"
          onClick={() => history.push(`/details/${movie.id}`)}
        >
          View Details
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => onDeleteItem(movie)}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default MovieCard;
