import { useEffect, useState } from "react";
import Search from "./components/Search";
import Spinner from "./components/Spinner";
import MovieCard from "./components/MovieCard";

const API_BASE_URL: string = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_KEY}`
    }
};

interface Movie {
    id: number;
    title: string;
    poster_path: string;
    overview: string;
    vote_average: number;
    release_date: string;
    original_language: string;
}

const App = () => {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [movies, setMovies] = useState<Movie[]>([]);
    const [isLoading, setIsLoading] = useState(false)

    const fetchMovies = async () => {
        setErrorMessage("")
        setIsLoading(true)
        
        try {
            const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
            const response = await fetch(endpoint, API_OPTIONS);
            if (!response.ok) {
                throw new Error("FAILED TO FETCH MVOIES")
            };
            const data = await response.json()
            
            if (data.Response === "False") {
                setErrorMessage(data.Error || "FAILED TO FETCH MOVIES");
                setMovies([]);
                return;
            }
            
            setMovies(data.results || []);
            
        } catch (error) {
            console.log(`ERROR FETCHING MOVIES: ${error}`);
            setErrorMessage("ERROR FETCHING MOVIES PLEASE TRY AGAIN LATER..");
        } finally {
            setIsLoading(false);
        }
        
    }

    useEffect(() => {
        fetchMovies()
    }, []);


  return (
      <>
          <main>
              <div className="pattern" />
              <div className="wrapper">
                  <header>
                      {/* image or moviie banner */}
                      <img src="./hero.png" alt="movies banner"/>
                      <h1>Search <span className="text-gradient">MOVIES</span> </h1>

                      {/* search box */}
                      <Search searchTerm={ searchTerm } setSearchTerm={ setSearchTerm } />
                  </header>
                  
                  <section className="all-movies">
                      <h2>ALl Movies</h2>
                      
                      {
                          isLoading ? (
                              <Spinner />
                          ) : errorMessage ? (
                              <p className="text-red-500">{errorMessage}</p>
                              ) : (
                                      <ul>
                                          {movies.map((movie) => (
                                              <MovieCard
                                                  key={movie.id}
                                                  movie={movie}
                                              />
                                          ))}
                                      </ul>
                          )
                      }
                      
                  </section>
                  
                  
              </div>
      </main>
    </>
  )
}

export default App;
