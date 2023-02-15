import { StyledClipLoader } from "./styles";
import { Color } from "ui";

interface CliploaderProps {
  isLoading: boolean;
  className?: string;
}

export const Cliploader = ({ isLoading, className }: CliploaderProps) => {
  return (
    <StyledClipLoader
      className={className}
      color={Color.WHITE}
      loading={isLoading}
      aria-label="Loading Spinner"
      data-testid="loader"
      size={20}
    />
  );
};
