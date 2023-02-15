import { Header, Footer } from "components";
import { Outlet } from "react-router-dom";
import { StyledMainTemplate } from "./styles";

export const MainTemplate = () => {
  return (
    <StyledMainTemplate>
      <Header />
      <Outlet />
      <Footer />
    </StyledMainTemplate>
  );
};
