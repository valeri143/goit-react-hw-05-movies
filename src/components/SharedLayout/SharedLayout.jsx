
import { Outlet } from "react-router-dom";
import { StyledLink, StyledHeader } from "./SharedLayout.styled";
import { Suspense } from "react";

const SharedLayout = () => {
  return (
    // <Container>
    <>
      <StyledHeader>
      <nav>
        <StyledLink to="/" end>Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </nav>
      </StyledHeader>
      <main>
      <Suspense fallback={<div>Loading...</div>}>
      <Outlet />
      </Suspense>
      </main>
      </>
    // </Container>
  );
};
export default SharedLayout