import React from "react";
import DateToday from "./Date/Date";
import { MainImage, NewsStatus, Title, News, Overlay } from "./MainNewsStyles";

const MainNews = () => (
  <MainImage
    source={require("../../../../../static/images/image-1.png")}
    resizeMode="cover"
  >
    <Overlay>
      <DateToday></DateToday>
      <News>
        <NewsStatus>JAUNĀKIE JAUNUMI</NewsStatus>
        <Title>
          Preses Konference & Dainis Kazakevičs Izlases Galvenais Treneris
        </Title>
      </News>
    </Overlay>
  </MainImage>
);
export default MainNews;
