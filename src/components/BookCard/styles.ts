import styled from "styled-components";
import { Color, Media, Typography } from "ui";

const StyledCard = styled.div`
  max-width: 352px;
  width: 100%;

  ${Media.XL} {
  }
`;
const ImageContainer = styled.div`
  background-color: ${Color.BLUE};
`;
const Image = styled.img``;
const InfoContainer = styled.div`
  padding-top: 20px;
`;
const Title = styled.h3`
  height: 64px;

  ${Typography.H3};
  color: ${Color.PRIMARY};
`;
const Subtitle = styled.p`
  padding-bottom: 8px;

  ${Typography.B3};
  color: ${Color.SECONDARY};
`;
const PriceContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  padding-top: 40px;
`;
const Price = styled.p`
  ${Typography.H3};
  color: ${Color.PRIMARY};
`;

export { StyledCard, ImageContainer, Image, InfoContainer, Title, Subtitle, PriceContainer, Price };
