import "./App.css";

function App() {
  return (
    // Todo: Do not forget to add the .App__darkMode
    <div className="App">
      {/* HEADER (Title, search input, etc.) */}
      {/* <Header /> */}
      <header className="App__header">
        <h1 className="App__title">Hall of Movies</h1>
        <div className="App__inputDiv">
          <input type="text" className="App__searchInput" />
          <button className="App__searchButton">🔍</button>
        </div>
      </header>
      {/* MAIN CONTENT: MOVIE GRID/LIST */}
      {/* <Main /> */}
      <div className="App__moviesContainer">
        <div className="App__movieCard">
          <img
            className="App__movieImage"
            src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
            alt=""
          />
          <div className="App__movieDescription">
            <h2 className="App__movieName">Movie Name</h2>
            <p className="App__movieOther">Other description here</p>
            <p className="App__movieReview">⭐⭐⭐⭐⭐</p>
          </div>
        </div>
        <div className="App__movieCard">
          <img
            className="App__movieImage"
            src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
            alt=""
          />
          <div className="App__movieDescription">
            <h2 className="App__movieName">Movie Name</h2>
            <p className="App__movieOther">Other description here</p>
            <p className="App__movieReview">⭐⭐⭐⭐⭐</p>
          </div>
        </div>
        <div className="App__movieCard">
          <img
            className="App__movieImage"
            src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
            alt=""
          />
          <div className="App__movieDescription">
            <h2 className="App__movieName">Movie Name</h2>
            <p className="App__movieOther">Other description here</p>
            <p className="App__movieReview">⭐⭐⭐⭐⭐</p>
          </div>
        </div>
        <div className="App__movieCard">
          <img
            className="App__movieImage"
            src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
            alt=""
          />
          <div className="App__movieDescription">
            <h2 className="App__movieName">Movie Name</h2>
            <p className="App__movieOther">Other description here</p>
            <p className="App__movieReview">⭐⭐⭐⭐⭐</p>
          </div>
        </div>
        <div className="App__movieCard">
          <img
            className="App__movieImage"
            src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
            alt=""
          />
          <div className="App__movieDescription">
            <h2 className="App__movieName">Movie Name</h2>
            <p className="App__movieOther">Other description here</p>
            <p className="App__movieReview">⭐⭐⭐⭐⭐</p>
          </div>
        </div>
        <div className="App__movieCard">
          <img
            className="App__movieImage"
            src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
            alt=""
          />
          <div className="App__movieDescription">
            <h2 className="App__movieName">Movie Name</h2>
            <p className="App__movieOther">Other description here</p>
            <p className="App__movieReview">⭐⭐⭐⭐⭐</p>
          </div>
        </div>
      </div>
      {/* FOOTER (Credits/Guided&Inspired by) */}
      {/* <Footer /> */}
      <p className="App__footer">
        I built this project through the guidance of a React JS full course
        video (2023) from JavaScript Mastery. Check out the video on this link:
        {"  "}
        <a
          href="https://www.youtube.com/watch?v=b9eMGE7QtTk&t=878s"
          target="_blank"
          rel="noreferrer"
        >
          Click here!
        </a>
      </p>
    </div>
  );
}

export default App;
