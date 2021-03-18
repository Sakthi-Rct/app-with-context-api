import React, { createContext, useState } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: "Harry Potter",
      price: "10",
      id: 12351,
    },
    {
      name: "Game of Thrones",
      price: "12",
      id: 12352,
    },
    {
      name: "Inception",
      price: "15",
      id: 12354,
    },
  ]);

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
