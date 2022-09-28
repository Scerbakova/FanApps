import styled from "styled-components/native";

export const Container = styled.View`
  margin-top: 20px;
  width: 100%;
  flex-direction: row;
  border-radius: 6px;
  overflow: hidden;
`;

export const Sign = styled.View`
  flex: 0.2;
  background-color: #9c1a34;
  align-items: center;
  justify-content: center;
`;

export const News = styled.View`
  flex: 0.8;
  background-color: #ffffff;
  padding: 10px 15px;
`;

export const Title = styled.Text`
  font-size: 20px;
  align-self: flex-start;
  font-weight: 700;
  line-height: 28px;
`;
