import React from "react";
import styled from "styled-components/native";
import Header from "./src/Header/Header";
import Home from "./src/screens/Home/Home";

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
`;

export default function App() {
  return (
    <Container>
      <Header />
      <Home />
    </Container>
  );
}
