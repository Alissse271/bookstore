import { SearchIcon } from "assets";
import { useForm } from "react-hook-form";
import { SearchContainer, StyledSearch, SearchButton } from "./styles";

export const Search = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = () => {};
  return (
    <SearchContainer onSubmit={handleSubmit(onSubmit)}>
      <StyledSearch type="text" placeholder="Search" />
      <SearchButton type="submit">
        <SearchIcon />
      </SearchButton>
    </SearchContainer>
  );
};
