import React from "react";
import Header from "./shared/header/Header";
import { Container, TextField, Button } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import MovieList from "./components/movielist/MovieList";
import MovieDetails from "./components/movieDetails/MovieDetails"
import Search from "./components/search/Search";

class App extends React.Component {
  state = {
    savedMovies: [],
    user: null,
    userName: "",
    showSecret: false,
  };

  componentDidMount() {
    const savedMovies = localStorage.getItem("userData");
    const userDetails = localStorage.getItem("userDetails");
    if (userDetails) {
      const parsedUser = JSON.parse(userDetails);
      this.setState({ user: parsedUser });
    } else {
      // handle rediret to login
    }

    if (savedMovies) {
      try {
        const parsed = JSON.parse(savedMovies);
        this.setState({
          savedMovies: parsed.savedMovies,
        });
      } catch (error) {
        console.log("App crashed check user input ...");
      }
    }
  }

  onMovieAdd = (movie) => {
    const movies = this.state.savedMovies;
    movies.push(movie);

    localStorage.setItem(
      "userData",
      JSON.stringify({
        savedMovies: movies,
      })
    );

    this.setState({
      savedMovies: movies,
    });
  };

  handleAddUSer = (event) => {
    localStorage.setItem(
      "userDetails",
      JSON.stringify({
        userName: this.state.userName,
      })
    );
    this.setState({
      user: {
        username: this.state.userName,
      },
      userName: null,
    });
  };

  onUserChange = (event) => {
    const { value } = event.target;
    this.setState({
      userName: value,
    });
  };

  changeRating = (rating, movieId) => {
    const foundIndex = this.state.savedMovies.findIndex(
      (item) => item.id === movieId
    );

    const { savedMovies } = this.state;

    const movie = savedMovies[foundIndex];

    savedMovies[foundIndex] = Object.assign({}, movie, { userRating: rating });

    this.setState({
      savedMovies: savedMovies,
    });

    localStorage.setItem(
      "userData",
      JSON.stringify({
        savedMovies: savedMovies,
      })
    );

    console.log(Object.assign({}, movie, { userRating: rating }));
  };

  logout = () => {
    this.setState({ user: null });
    localStorage.removeItem("userDetails");
  };

  onMovieDelete = (movie) => {
    const movies = this.state.savedMovies;
    movies.splice(movies.indexOf(movie), 1);
    let index = movies.indexOf(movie);
    localStorage.setItem('userData', JSON.stringify({ savedMovies: movies}));
    this.setState ({
      savedMoves: movies,
    })
  }

  render() {
    const { savedMovies, user } = this.state;
    return (
      <Router>
        <div className="App">
          <Header user={user} onLogout={this.logout} />
          {user ? (
            <Switch>
              <Route path="/" exact>
                <React.Fragment>
                  <Container maxWidth="md">
                    <Search onMovieAdd={this.onMovieAdd} />
                  </Container>
                  {this.state.showSecret && <h2>This is interactive</h2>}
                  <Container maxWidth="md">
                    <MovieList
                      savedMovies={savedMovies}
                      changeRating={this.changeRating}
                      onMovieDelete={this.onMovieDelete}
                    />
                  </Container>
                </React.Fragment>
              </Route>
              <Route path="/settings">Hello {user.userName}</Route>
              <Route path="/details/:id">
                <MovieDetails />
              </Route>
              <Route path="*">
                <Redirect path="/" />
              </Route>
            </Switch>
          ) : (
            <Container maxWidth="md">
              <h2>Hello stranger!</h2>
              <h4>What is your name?</h4>
              <TextField label="Name" onChange={this.onUserChange} />
              <Button variant="contained" onClick={this.handleAddUSer}>
                Save
              </Button>
            </Container>
          )}
        </div>
      </Router>
    );
  }
}

export default App;
