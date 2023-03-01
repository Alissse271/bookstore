import {
  StyledCard,
  ImageContainer,
  Image,
  InfoContainer,
  Title,
  Subtitle,
  PriceContainer,
  Price,
} from "./styles";

export const BookCard = () => {
  return (
    <StyledCard>
      <ImageContainer>
        <Image />
      </ImageContainer>
      <InfoContainer>
        <Title>Mastering ROS for Robotics Programming</Title>
        <Subtitle>by Lentin Joseph, Apress 2018</Subtitle>
        <PriceContainer>
          <Price>$31.38 </Price>
        </PriceContainer>
      </InfoContainer>
    </StyledCard>
  );
};
