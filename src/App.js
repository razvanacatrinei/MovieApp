import React from 'react';
import Header from './shared/header/Header';
import {Grid, Container} from '@material-ui/core';

import MovieList from './components/movielist/MovieList';
import Search from './components/search/Search';



function App() {
  return (
    <div className="App">
      <Header />
      <Container maxWidth='md'>
          <Search />
        </Container>
      <Container maxWidth='md'>
        <MovieList />
      </Container>
    </div>
  )
}

export default App;
