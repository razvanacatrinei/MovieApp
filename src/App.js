import React from 'react';
import Header from './shared/header/Header';
import {Container, TextField, Button} from '@material-ui/core';

import MovieList from './components/movielist/MovieList';
import Search from './components/search/Search';



class App extends React.Component  {

  state = {
    savedMovies: [],
    user : null,
    userName: ''
}

componentDidMount () {
    const savedMovies  = localStorage.getItem('userData')
    const userDetails = localStorage.getItem('userDetails')
    if (userDetails) {
      const parsedUser = JSON.parse(userDetails);
      this.setState(
        {user : parsedUser}
      )
    } else {
      this.setState ({
        user : null
        
      })
    }

    if (savedMovies) {
      try {
        const parsed = JSON.parse(savedMovies);
        this.setState({
            savedMovies: parsed.savedMovies
        })
      } catch (error) {
        console.log('App crashed check user input ...')       
    }
  }
}

onMovieAdd = (movie) => {
    const movies = this.state.savedMovies
    movies.push(movie)
    localStorage.setItem(
      'userData', 
      JSON.stringify({
          savedMovies: movies,
  }),
  )
    this.setState ({
        savedMovies : movies,
    })
}

  handleAddUSer = (event) => {
    localStorage.setItem('userDetails', JSON.stringify({
      userName: this.state.userName
    }))
    this.setState({
      user: {
        username: this.state.userName
      },
      userName: null
    })
  }


  onUserChange = (event)=> {
    const { value } = event.target
    this.setState({
      userName: value
    })
  }

  logout = () => {
    this.setState({user: null})
    localStorage.removeItem('userDetails')
  }

  render() {
    const {savedMovies, user} = this.state
    return (
      <div className="App">
        <Header user={user} onLogout={this.logout} />
        {
          user ? <React.Fragment>
             <Container maxWidth='md'>
          <Search onMovieAdd={this.handleAdd} />
        </Container>
        <Container maxWidth='md'>
          <MovieList savedMovies = {savedMovies}/>
        </Container>
          </React.Fragment> : ( <Container maxWidth="md">
            <h2>Hello stranger!</h2>
            <h4>What is your name?</h4>
            <TextField label="Name" onChange={this.onUserChange} />
            <Button variant="contained" onClick={this.handleAddUSer}>Save</Button>
          </Container>
          )}
       
      </div>
    )  
  }
}

export default App;
