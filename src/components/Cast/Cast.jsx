import { useEffect, useState } from "react";
import { getMovieCast } from "helpers/api";
import { useParams } from "react-router-dom";

const Cast = () => {
const { movieId } = useParams();
const[cast, setCast] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getMovieCast(movieId);
        setCast(data)
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [movieId]);

  return(
    <ul>
       {cast.map(({profile_path, name, character, id}) => (
    <li key={id}>
  <img src={`https://image.tmdb.org/t/p/w200${profile_path}`} alt={name} width={100}/>
  <h4>{name}</h4>
  <h4>Character: {character}</h4>
    </li>
       ))}
    </ul>
  )
};

export default Cast;
