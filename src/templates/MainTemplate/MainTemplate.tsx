import { Header, Footer } from "components";
import { Outlet } from "react-router-dom";
import { StyledMainTemplate, Container } from "./styles";

export const MainTemplate = () => {
  return (
    <StyledMainTemplate>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </StyledMainTemplate>
  );
};
