import React from 'react';
import {Typography} from '@material-ui/core';
import MovieCard from "./MovieCard";

const MovieList = () => <React.Fragment>
    <Typography variant="h4">Saved movies</Typography>
    <MovieCard />
</React.Fragment>

export default MovieList;