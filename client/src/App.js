import React, { useState, useEffect } from 'react';
import axios from 'axios';
//React Router imports
import { Switch, Link, Route } from 'react-router-dom'
//components used for the different routes
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const App = () => {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
        <SavedList list={[ /* This is stretch */]} />
        <Link to = '/'>Home</Link>
      <div>
        <Link to = '/movies'>Movies</Link>
      </div>
      <div>
        <Switch>
          <Route path ='/'><MovieList movies={movieList}/></Route>
          <Route path ='/movies/:id'><Movie props={movieList}/></Route>
        </Switch>
      </div>
    </div>
    
   
  );
};

export default App;
