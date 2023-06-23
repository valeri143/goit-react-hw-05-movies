import { getTrandingMovies } from "components/helpers/api"
import { useEffect, useState} from "react";
import { MoviesList } from "components/MoviesList/MoviesList";
import { useLocation } from "react-router-dom";

const Home = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);
    const location = useLocation()
    
    useEffect(() => {
      const fetchTrendingMovies = async () => {
        try {
          const movies = await getTrandingMovies();
          setTrendingMovies(movies);
        } catch (error) {
          console.error('Error fetching trending movies:', error);
        }
      };
  
      fetchTrendingMovies();
    }, []);
  
    return (
      <>
        <h1>Trending today</h1>
        <MoviesList movies={trendingMovies} location={location}/>
      </>
    );
  };
export default Home