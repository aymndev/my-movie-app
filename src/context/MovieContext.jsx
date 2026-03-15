import {createContext,useState,useEffect} from "react" ;
export const MovieContext=createContext();


export default function MovieProvider({children}){
    const [movie,setMovie]=useState(null);
  
    const [loading,setLoading]=useState(false);
    const [error,setEror]=useState(null);
    const API_key='b9348b85';

    
    useEffect(()=>{
        const fetchMovie=async()=>{
            try{
                setLoading(true)
                const MoviesUrl=`http://www.omdbapi.com/?i=tt3896198&apikey=${API_key}`
                
                const moviesRes= await fetch(MoviesUrl);
                const movieData=await moviesRes.json();
            
            if (movieData.Response === "False"){
                setEror("movie not found")
                return;
                
            }
            setEror(null)
            setMovie(movieData)
            console.log("data",movieData)
        } catch(err){
            setEror("Something went wrong");
        }finally{
            setLoading(false)
        }

        };
        fetchMovie();
    },[]);
    return(
        <MovieContext.Provider value={{
            movie,
            setMovie,
            loading,
            setLoading,
            error,
            setEror


        }}>
            {children}

        </MovieContext.Provider>

    )

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

