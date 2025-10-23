import { useEffect, createContext, useState } from "react";
export const MovieContext = createContext();
export const MovieProvider = ({ children }) => {
   const [movies, setMovies] = useState(() => {
    const saved = localStorage.getItem("movies");
    return saved ? JSON.parse(saved) : [];
  });
  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);
  const add = (movie) => setMovies((prev) => [...prev, movie]);
  const deletem = (id) => setMovies((prev) => prev.filter((m) => m.id !== id));
  return (
    <MovieContext.Provider value={{ movies, add, deletem }}>
      {children}
    </MovieContext.Provider>
  );
};
