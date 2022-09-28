import React from "react";
import { Container, NewsImage, News, Title } from "./NewsStyles";

const OtherNews = ({ image, title }) => (
  <Container>
    <NewsImage source={image}></NewsImage>
    <News>
      <Title>{title}</Title>
    </News>
  </Container>
);
export default OtherNews;
