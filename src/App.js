// import './App.css';
// import {useState , useEffect} from 'react';

// const App = () =>  {

//   const [counter, setCounter] = useState(0);
  
//   useEffect(() => {
//     setCounter(0);
//   },[]);
//   return (
  
//   <div className="App">
    
//      <button onClick={() => setCounter((prevCount) => prevCount - 1 ) }>-</button>

//      <h1>{counter}</h1>
    
//      <button onClick={() => setCounter((prevCounter) => prevCounter + 1 )}>+</button>
    
//     </div>
//   );
// }

// export default App;
import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";

const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("Movie");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;