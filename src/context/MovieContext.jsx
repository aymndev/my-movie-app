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


/*
The OMDb API <donotreply@omdbapi.com>
	
3:03 AM (6 minutes ago)
	
	
to me
Here is your key: b9348b85

Please append it to all of your API requests,

OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=b9348b85

Click the following URL to activate your key: http://www.omdbapi.com/apikey.aspx?VERIFYKEY=5e6a10ea-9d11-4141-97c2-62508b68e43a
If you did not make this request, please disregard this email.
*/

