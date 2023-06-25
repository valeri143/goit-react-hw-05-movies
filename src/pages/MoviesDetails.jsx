import { useParams, Outlet, Link, useLocation} from "react-router-dom";
import { useEffect, useRef, useState, Suspense } from "react";
import { getMovieById } from "helpers/api";
import { MovieCard } from "components/MovieCard/MovieCard";

const MoviesDetails = () => {
    const { movieId } = useParams();
    const[movie, setMovie] = useState({})
    const location = useLocation()
    const backLinkLocation = useRef(location.state?.from ?? "/")

    useEffect(() =>{
        const fetchMovie = async () =>{
            try{
                const movie = await getMovieById(movieId)
                setMovie(movie)
            }
            catch(error){
                console.error('Error fetching  movie:', error);
            }
        }
        fetchMovie()
    },[movieId])
    return (
    <>
    <MovieCard
    backLinkLocation={backLinkLocation}
     poster_path={movie.poster_path} 
     original_title={movie.original_title}
     vote_average={movie.vote_average}
     overview={movie.overview}
     genres={movie.genres}/>
     <p>Additional information</p>
    <ul style={{borderBottom: "2px  solid #7d7979", paddingBottom: '15px'}}>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
    </ul>
       <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
       </Suspense>
    </>
    );
}
export default MoviesDetails