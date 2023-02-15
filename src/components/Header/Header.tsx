import { LogoIcon, AccountIcon, CartIcon, FavoritesIcon } from "assets";
import { MenuButton } from "components";
import { Search } from "components/Search/Search";
import { useWindowSize } from "hooks";
import { Link } from "react-router-dom";
import { ROUTE } from "router";
import { StyledHeader, Links, StyledLink } from "./styles";

export const Header = () => {
  const { width = 0 } = useWindowSize();
  return (
    <StyledHeader>
      <Link to={ROUTE.HOME}>
        <LogoIcon />
      </Link>
      {width > 768 && <Search />}
      <Links>
        {width > 768 && (
          <StyledLink to={ROUTE.FAVORITES}>
            <FavoritesIcon />
          </StyledLink>
        )}
        <StyledLink to={ROUTE.CART}>
          <CartIcon />
        </StyledLink>
        {width > 768 && (
          <StyledLink to={ROUTE.ACCOUNT}>
            <AccountIcon />
          </StyledLink>
        )}
        {width <= 768 && <MenuButton type="button" open={false} />}
      </Links>
    </StyledHeader>
  );
};
