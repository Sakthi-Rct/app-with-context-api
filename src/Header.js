import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

function Header() {
  const [movies, setMovies] = useContext(MovieContext);

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__wrap">
          <h1>Pico Zen Movies</h1>
          <p>List of Movies: {movies.length}</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
