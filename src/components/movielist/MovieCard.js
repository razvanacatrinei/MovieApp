import React from 'react';
import { Card,Typography,  CardActionArea, CardMedia, CardContent , Button, CardActions } from '@material-ui/core';


const MovieCard = () => {
    return (
    <Card>
        <CardActionArea>
            <CardContent>
                <CardMedia image="" description=" movie poster"></CardMedia>
                <Typography variant="h5">
                    Movie Title
                </Typography>
                <Typography variant="subtitle2">
                    Movie description...
                </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary">Delete</Button>
        </CardActions>
    </Card>
    )}


    export default MovieCard;