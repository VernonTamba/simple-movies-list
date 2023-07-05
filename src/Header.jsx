import React from "react";

const Header = ({
  searchInput,
  setSearchInput,
  searchMovieInput,
  darkMode,
  setDarkMode,
}) => {
  return (
    <header className="App__header">
      <h1 className="App__title">Hall of Movies</h1>
      <form onSubmit={searchMovieInput} className="App__inputDiv">
        <input
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
          placeholder="Search your keyword here"
          type="text"
          className="App__searchInput"
        />
        <button onClick={searchMovieInput} className="App__searchButton">
          🔍
        </button>
      </form>
      <span
        onClick={() => setDarkMode(!darkMode)}
        className="App__darkModeButton"
      >
        {darkMode ? "☀️" : "🌑"}
      </span>
    </header>
  );
};

export default Header;
