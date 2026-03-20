import { createContext, useState, useEffect } from "react";

export const MovieContext = createContext();

export default function MovieProvider({ children }) {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);

        const res = await fetch("https://api.tvmaze.com/shows");
        const data = await res.json();

        setError(null);
        setMovie(data);

        console.log("TVMaze data:", data);

      } catch (err) {
        setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, []);

  return (
    <MovieContext.Provider value={{
      movie,
      loading,
      error
    }}>
      {children}
    </MovieContext.Provider>
  );
}


