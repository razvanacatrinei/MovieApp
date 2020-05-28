import React from "react";
import MovieCard from "./MovieCard";

class MovieList extends React.Component {
  render() {
    return (
      <React.Fragment>
        {this.props.savedMovies.length > 0
          ? this.props.savedMovies.map((item) => (
              <MovieCard
                movie={item}
                changeRating={this.props.changeRating}
                onDeleteItem={this.props.onMovieDelete}
              />
            ))
          : "Search for a movie and add it to your list."}
      </React.Fragment>
    );
  }
}

export default MovieList;
