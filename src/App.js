import React, { useEffect, useLayoutEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearch] = useState('');

  const getMovieRequest = async () => {
    const url = 'http://www.omdbapi.com/?s=star wars&apikey=291dc5e8'
    const response = await fetch(url);
    const responseJson = await response.json();
    setMovies(responseJson.Search);
  }

  useEffect (() => {
    getMovieRequest();
  }, [])

  return (
      <div className = 'container-fluid movie-app'>
      <div className = 'row'>
       <MovieList movies = {movies} /> 
       </div>
       </div>
  );

};

export default App;
