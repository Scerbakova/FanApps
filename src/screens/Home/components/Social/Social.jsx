import React from "react";
import { Container, Img } from "./SocialStyles";

const Social = ({ img, onPress }) => (
  <Container onPress={onPress}>
    <Img source={img}></Img>
  </Container>
);
export default Social;
