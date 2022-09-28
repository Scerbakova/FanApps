import React from "react";
import Important from "./components/Important/Important";
import OtherNews from "./components/News/News";
import Social from "./components/Social/Social";
import MainNews from "./components/MainNews/MainNews";
import { Container, NewsContainer, SocialContainer } from "./HomeStyles";

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
const social = [
  require("../../../static/images/twitter.png"),
  require("../../../static/images/facebook.png"),
  require("../../../static/images/instagram.png"),
  require("../../../static/images/youtube.png"),
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
      {social.map((img, i) => (
        <Social key={i} img={img} />
      ))}
    </SocialContainer>
  </Container>
);

export default Home;
