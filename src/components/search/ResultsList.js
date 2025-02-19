import React from 'react';

import {IconButton, Grid} from '@material-ui/core';

import AddIcon from '@material-ui/icons/Add';

import styles from './ResultsList.module.css'

<<<<<<< HEAD
<<<<<<< HEAD
import { formatDate } from '../../utils/dateUtils';

const getPosterUrl = (imageUri) => 
imageUri
? `https://image.tmdb.org/t/p/w200${imageUri}`
: 'https://placehold.co/200x300?text=No+image'
=======
const getPosterUrl = (imageUri) => `https://image.tmdb.org/t/p/w200${imageUri}`


>>>>>>> 93d568eb09bd0f5cb15041fc1284aba5e17bf909
=======
const getPosterUrl = (imageUri) => `https://image.tmdb.org/t/p/w200${imageUri}`


>>>>>>> 93d568eb09bd0f5cb15041fc1284aba5e17bf909

const ResultsList = (props) => (
    <React.Fragment>
        {props.movies.map((item) => (
            <Grid container xs={12}>
                <Grid item xs={2}>
                    <img src={getPosterUrl(item.poster_path)} className={styles.poster} />
                </Grid>
                <Grid item xs={3}>{item.original_title}</Grid>
<<<<<<< HEAD
<<<<<<< HEAD
                <Grid item xs={2}>{formatDate(item.release_date)}</Grid>
=======
                <Grid item xs={2}>{item.release_date}</Grid>
>>>>>>> 93d568eb09bd0f5cb15041fc1284aba5e17bf909
=======
                <Grid item xs={2}>{item.release_date}</Grid>
>>>>>>> 93d568eb09bd0f5cb15041fc1284aba5e17bf909
                <Grid item xs={2}>
                    <IconButton onClick={() => props.onAdd(item)}>
                        <AddIcon />
                    </IconButton>
                </Grid>
            </Grid>
        ))}
    </React.Fragment>
)
export default ResultsList;