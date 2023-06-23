import { Formik } from "formik";
import { StyledButton, StyledForm, StyledInput } from "./SearchMovies.styled";

export const SearchMovies = ({onSubmit, query}) =>{
    return (
        <>
        <Formik initialValues={{ query: query }} onSubmit={onSubmit}>
      <StyledForm >
        <StyledInput
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
        />
        <StyledButton type="submit">
            Search
        </StyledButton>
      </StyledForm>
      </Formik>
        </>
        )
}