import React, {Component}  from 'react';
import axios from 'axios';
import {TextField, Button, Container} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';

import ResultsList from './ResultsList';

import Settings from '../../config/Settings.js';

import styles from './Search.module.css';

<<<<<<< HEAD
<<<<<<< HEAD
class Search extends Component{
=======
=======
>>>>>>> 93d568eb09bd0f5cb15041fc1284aba5e17bf909


class Search extends Component{

<<<<<<< HEAD
>>>>>>> 93d568eb09bd0f5cb15041fc1284aba5e17bf909
=======
>>>>>>> 93d568eb09bd0f5cb15041fc1284aba5e17bf909
    state = {
        searchResults: [],
        searchTerm: ''
    }

<<<<<<< HEAD
<<<<<<< HEAD
    handleSearch = async () => {
=======
    handleSearch = () => {
>>>>>>> 93d568eb09bd0f5cb15041fc1284aba5e17bf909
=======
    handleSearch = () => {
>>>>>>> 93d568eb09bd0f5cb15041fc1284aba5e17bf909
        console.log(this.state.searchTerm)
        const {API_URL, API_KEY} = Settings;
        const url = `${API_URL}/search/movie?api_key=${API_KEY}&query=${this.state.searchTerm}`
        
<<<<<<< HEAD
<<<<<<< HEAD
        const saveMovies = (response)=> {
            this.setState({
                searchResults: response.data.results
            })
        }

        const logError = (error) => console.log(error)
        axios.get(url).then(saveMovies).catch(logError)
=======
=======
>>>>>>> 93d568eb09bd0f5cb15041fc1284aba5e17bf909
        axios.get(url).then((response)=> {
            this.setState({
                searchResults: response.data.results
            })
        })
<<<<<<< HEAD
>>>>>>> 93d568eb09bd0f5cb15041fc1284aba5e17bf909
=======
>>>>>>> 93d568eb09bd0f5cb15041fc1284aba5e17bf909
    }

    handleChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    handleAdd = (movie) => {
        this.setState ({
            searchResults: [],
            searchTerm: ''
        })
        this.props.onMovieAdd(movie)
    }

<<<<<<< HEAD
<<<<<<< HEAD
    handleKeyPress = (event) => {
        console.log(
            `KeyCode: ${event.charCode} | Key: ${event.key} ( Alt: ${event.altKey}, Ctrl: ${event.ctrlKey})`,
        )
        if (event.key === 'Enter') {
            this.handleSearch()
        }
    }

=======
>>>>>>> 93d568eb09bd0f5cb15041fc1284aba5e17bf909
=======
>>>>>>> 93d568eb09bd0f5cb15041fc1284aba5e17bf909
    render() {
        return  (
        <React.Fragment>
            <Container className={styles.container}>
            <TextField 
<<<<<<< HEAD
<<<<<<< HEAD
                placeholer = "Type the name of a movie..." 
                label = "Search" 
                variant = "outlined" 
                className = {styles.search}
                value = {this.state.searchTerm}
                onChange = {this.handleChange}
                onKeyPress = {this.handleKeyPress}
            />
            <Button
                variant = "outlined"
                color = "normal"
                startIcon = {<SearchIcon />}
                onClick = {this.handleSearch}>
                Search
            </Button>
            </Container>
            {this.state.searchResults.length > 0 && (
            <Container className = {styles.results}>
                <ResultsList 
                    movies={this.state.searchResults} 
                    onAdd={this.handleAdd} 
                />
=======
=======
>>>>>>> 93d568eb09bd0f5cb15041fc1284aba5e17bf909
                placeholer="Type the name of a movie..." 
                label="Search" 
                variant="outlined" 
                className={styles.search}
                value={this.state.searchTerm}
                onChange={this.handleChange}
            />
            <Button
                variant="outlined"
                color="normal"
                startIcon={<SearchIcon />}
                onClick= {this.handleSearch}
            >
                Search
            </Button>
            </Container>
            {this.state.searchResults.length > 0 && (<Container         className={styles.results}>
            <ResultsList movies={this.state.searchResults} onAdd={this.handleAdd} />
<<<<<<< HEAD
>>>>>>> 93d568eb09bd0f5cb15041fc1284aba5e17bf909
=======
>>>>>>> 93d568eb09bd0f5cb15041fc1284aba5e17bf909
            </Container>)}
        </React.Fragment>
        )
    }
}

export default Search;