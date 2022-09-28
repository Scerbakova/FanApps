import React from "react";
import Important from "./components/Important/Important";
import OtherNews from "./components/News/News";
import Social from "./components/Social/Social";
import MainNews from "./components/MainNews/MainNews";
import { Container, NewsContainer, SocialContainer } from "./HomeStyles";
import { Linking } from "react-native";
import { SocialLinks } from "../../../static/socialLinks";

const news = [
  {
    image: require("../../../static/images/news-2.jpg"),
    title: "Meiteņu Turnīrā Gulbenē Uzvar Viešņas No Igaunijas",
  },
  {
    image: require("../../../static/images/news-1.jpg"),
    title: 'Aizvadīts Pirmais "ādas Bumbas" Sabraukums',
  },
];

const Home = () => (
  <Container>
      <MainNews />
      <Important />
      <NewsContainer>
        {news.map(({ title, image }, i) => (
          <OtherNews key={i} title={title} image={image} />
        ))}
      </NewsContainer>
      <SocialContainer>
        {SocialLinks.map((img, i) => (
          <Social key={i} img={img.image} onPress={() => {Linking.openURL(img.link)}} />
        ))}
      </SocialContainer>
  </Container>
);

export default Home;
