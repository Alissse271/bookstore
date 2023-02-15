import { StyledButton } from "./styles";
import { ButtonHTMLAttributes, memo } from "react";
import { Cliploader } from "components";

interface ButtonProps {
  type: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  label: string;
  onClick: () => void;
  white?: boolean;
  primary?: boolean;
  isLoader?: boolean;
}

export const Button = memo(({ type, label, onClick, white, primary, isLoader }: ButtonProps) => {
  return (
    <StyledButton type={type} onClick={onClick} white={white} primary={primary}>
      {label}
      {isLoader && <Cliploader isLoading={isLoader} />}
    </StyledButton>
  );
});
