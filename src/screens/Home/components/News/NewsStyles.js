import styled from "styled-components/native";

export const Container = styled.View`
  width: 47%;
  max-height: 100%;
  margin-bottom: -200px;
`;

export const NewsImage = styled.Image`
  width: 100%;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

export const News = styled.View`
  background-color: #ffffff;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  justify-content: center;
  min-height: 45%;
`;

export const Title = styled.Text`
  font-size: 20px;
  align-self: center;
  font-weight: 700;
  line-height: 28px;
  text-align: center;
  margin: 10px;
`;
