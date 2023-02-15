import { memo } from "react";
import { StyledButton } from "./styles";

interface MenuButtonProps {
  type: "button";
  className?: string;
  open: boolean;
  togleMenu?: () => void;
}

export const MenuButton = memo(({ type, className, open, togleMenu }: MenuButtonProps) => {
  return (
    <StyledButton className={className} type={type} open={open} onClick={togleMenu}></StyledButton>
  );
});
