import React, { useEffect, useState } from "react";

import { Link, useParams, useHistory } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
  Container,
} from "@material-ui/core";

import styles from './MovieDetails.module.css'

import { getDetails } from "../../api/MovieService";

import { formatDate } from '../../utils/dateUtils';

const getPosterUrl = (imageUri) =>
  imageUri
    ? `https://image.tmdb.org/t/p/w300${imageUri}`
    : "https://placehold.co/200x300?text=No+image";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  let history = useHistory();

  useEffect(() => {
    getDetails(id).then((results) => setMovie(results.data));
  }, [id]);

  return (
    <Container>
      <Card>
        <CardActionArea>
          <CardContent className={styles.content}>
            <CardMedia image="" description=" movie poster">
              <img src={getPosterUrl(movie.poster_path)} alt="Movie poster" />
            </CardMedia>
            <div className={styles.media}>
            <Typography variant="h5">Title: {movie.original_title}</Typography>
            <p> {formatDate(movie.release_date)} </p>
             <h5><span className={styles.title}>Overview:</span> {movie.overview}</h5>
             <h5><span className={styles.title}>Budget:</span> {movie.budget} $</h5>
             <h5><span className={styles.title}>Revenue:</span> {movie.revenue} $</h5>
             </div>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="secondary"
            onClick={() => history.push(`/`)}
          >
            Back
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default MovieDetails;
