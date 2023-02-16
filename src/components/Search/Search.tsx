import { SearchIcon } from "assets";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "router";
import { SearchContainer, StyledSearch, SearchButton } from "./styles";

export const Search = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = () => {};
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(ROUTE.SEARCH);
  };
  return (
    <SearchContainer onSubmit={handleSubmit(onSubmit)} onClick={handleClick}>
      <StyledSearch type="text" placeholder="Search" />
      <SearchButton type="submit">
        <SearchIcon />
      </SearchButton>
    </SearchContainer>
  );
};
