import React from "react";
import "./App.css";
import Header from "./Header";
import MovieList from "./MovieList";
import { MovieProvider } from "./MovieContext";
import AddMovies from "./AddMovies";

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Header />
        <AddMovies />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
