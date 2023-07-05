import React from "react";

const MovieCard = ({ movie, darkMode }) => {
  return (
    <div className={`App__movieCard ${darkMode && "darkMode__children"}`}>
      <img className="App__movieImage" src={movie.Poster} alt={movie.Title} />
      <div className="App__movieDescription">
        <h2 className="App__movieName">{movie.Title}</h2>
        <p className="App__movieType">{movie.Type.toUpperCase()}</p>
        <p className="App__movieYear">{movie.Year}</p>
      </div>
    </div>
  );
};

export default MovieCard;
