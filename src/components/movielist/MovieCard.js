import React from 'react';
import { Card,Typography,  CardActionArea, CardMedia, CardContent , Button, CardActions } from '@material-ui/core';


const MovieCard = (props) => {
    const { movie } = props;
    return (
    <Card>
        <CardActionArea>
            <CardContent>
                <CardMedia image="" description=" movie poster"></CardMedia>
                <Typography variant="h5">
                    {movie.original_title}
                </Typography>
                <Typography variant="subtitle2">
                    {movie.release_date}
                </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary">Delete</Button>
        </CardActions>
    </Card>
    )}


    export default MovieCard;