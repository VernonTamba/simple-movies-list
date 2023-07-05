import { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./MovieCard";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [movies, setMovies] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const randomDefaultSearch = [
    "Superman",
    "Batman",
    "Spiderman",
    "Action",
    "Hello",
    "Scary",
    "Funny",
    "Avengers",
    "Justice League",
    "Mission",
  ];

  // Setting up the API
  const API_KEY = "cc0d0b66";
  const API_URL = `https://www.omdbapi.com?apikey=${API_KEY}`;

  const searchMovies = async (movieTitle) => {
    const response = await fetch(`${API_URL}&s=${movieTitle}`);

    const data = await response.json();

    setMovies(data.Search);
  };

  // Get movies once the page loads
  useEffect(() => {
    searchMovies(
      randomDefaultSearch[
        Math.floor(Math.random() * randomDefaultSearch.length)
      ]
    );
  }, []);

  // Search for movies based on the search input
  const searchMovieInput = (event) => {
    event.preventDefault();

    if (searchInput === "") {
      return;
    }

    searchMovies(searchInput);

    setSearchInput("");
  };

  return (
    <div className={`App ${darkMode ? "darkMode" : ""}`}>
      {/* HEADER (Title, search input, etc.) */}
      <Header
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        searchMovieInput={searchMovieInput}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* MAIN CONTENT: MOVIE GRID/LIST */}
      {movies?.length > 0 ? (
        <div className="App__moviesContainer">
          {movies.map((movie) =>
            // If the poster is not available, then do not show the movie/series
            movie.Poster !== "N/A" ? (
              <MovieCard key={movie.imdbID} movie={movie} darkMode={darkMode} />
            ) : (
              <></>
            )
          )}
        </div>
      ) : (
        <div className="App__moviesContainer2">
          <p className="App__notFoundMessage">No movies/series found!😖</p>
          <p className="App__notFoundMessage2">
            Try searching this: Spiderman, Superman, Batman.
          </p>
        </div>
      )}

      {/* FOOTER (Credits/Guided&Inspired by) */}
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
