import React from "react";
import { Container, Sign, News, Title, Img } from "./ImportantStyles";
import { Image } from "react-native";

const Important = () => (
  <Container>
    <Sign>
      <Image source={require('../../../../../static/images/Important.png')}></Image>
    </Sign>
    <News>
      <Title>Lff Atceļ Papildus Ierobežojumus Spēļu Apmeklēšanas Noteikumos</Title>
    </News>
  </Container>
);
export default Important;
