import { Link } from "react-router-dom"
import { StyledDiv, StyledImg, StyledSpan, StyledButton, StyledDiv1, StyledDiv2, StyledUl, StyledLi} from "./MovieCard.styled"

export const MovieCard = ({backLinkLocation, poster_path, original_title, vote_average, overview, genres}) => {
    return (
        <StyledDiv>
            <Link to={backLinkLocation.current}><StyledButton><StyledSpan></StyledSpan>Go back</StyledButton> </Link>
            <StyledDiv1>
           <StyledImg src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={original_title} />
         <StyledDiv2>
         <h2>{original_title}</h2>
           <p>User score: {Math.round(Number(vote_average)*10)}%</p>
           <h3>Overview</h3>
           <p>{overview}</p>
           <h3>Genres</h3>
           <StyledUl>
        {genres && genres.map(({name, id}) => (
        <StyledLi key={id}>{name}</StyledLi>
         ))}
        </StyledUl>
         </StyledDiv2>
          </StyledDiv1>
        </StyledDiv>
    )
}