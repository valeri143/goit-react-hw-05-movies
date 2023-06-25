// import { Link} from "react-router-dom";
import { SearchMovies } from "components/SearchMovies/SearchMovies";
import { useSearchParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMoviesByQuery } from "helpers/api";
import { MoviesList} from "components/MoviesList/MoviesList";

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? '';
  const[movies, setMovies] = useState([])
  const location = useLocation()

  useEffect(() => {
  if(query === ''){
    return
  }
  const fetchMovie = async () => {
  const data = await getMoviesByQuery(query)
  setMovies(data)
  }
  fetchMovie()
}, [query])

  const onSubmit = async (values, { resetForm }) => {
    // setSearchParams({query : `${Date.now()}/${values}`});
    const nextParams = query !== "" ? { query } : {};
    setSearchParams(nextParams);
    setSearchParams({query: values.query})
    resetForm();
  };

    return (
        <>
        <SearchMovies onSubmit={onSubmit} query={query}/>
        <MoviesList movies={movies} location={location}/>
        </>
      );
}
export default Movies