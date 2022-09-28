import styled from "styled-components/native";

export const MainImage = styled.ImageBackground`
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  color: white;
`;

export const News = styled.View`
  padding: 20px;
  max-width: 75%;
`;

export const Overlay = styled.View`
  min-width: 100%;
  padding: 20px 0px;
  background-color: rgba(19,17,17,0.5);
`;

export const NewsStatus = styled.Text`
  color: white;
  font-weight: 800;
  margin-bottom: 10px;
`;

export const Title = styled.Text`
  color: white;
  font-weight: 800;
  font-size: 20px;
`;
