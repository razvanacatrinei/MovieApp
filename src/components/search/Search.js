import React  from 'react';
import {TextField, Button, Container} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';

import styles from './Search.module.css';

const Search = () => (
<Container className={styles.container}>
    <TextField 
        placeholer="Type the name of a movie..." 
        label="Search" 
        variant="outlined" 
        className={styles.search}
    />
    <Button
        variant="outlined"
        color="normal"
        startIcon={<SearchIcon />}
    >
        Search
    </Button>
</Container>
)
export default Search;