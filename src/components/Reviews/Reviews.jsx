import { getMovieReviews } from "helpers/api"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Reviews = () => {
    const { movieId } = useParams();
    const[reviews, setReviews] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
              const data = await getMovieReviews(movieId);
              setReviews(data)
            } catch (error) {
              console.error(error);
            }
          };
      
          fetchData();
    }, [movieId])

    return(
        <ul>
            { reviews.length === 0 ?  "We don`t have any reviews for this movie" : reviews.map(({author, content, id}) => (
                <li key={id}>
                    <h4>Author: {author}</h4>
                    <p>{content}</p>
                </li>
            ))}
        </ul>
    )
}
export default Reviews