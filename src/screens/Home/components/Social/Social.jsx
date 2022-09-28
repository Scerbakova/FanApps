import React from "react";
import { Container, Img } from "./SocialStyles";

const Social = ({ img }) => (
  <Container onPress={() => {
    console.log('it works');
  }}>
    <Img source={img}></Img>
  </Container>
);
export default Social;
