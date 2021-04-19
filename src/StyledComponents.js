import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  color: blue;
`;
const Paragraph = styled.p`
  color: red;
`;
const Wrapper = styled.div`
  text-align: center;
`;

const App = () => {
  return (
    <Wrapper>
      <Title>Hello Kang Cecep</Title>
      <Paragraph>My Name is Johar</Paragraph>
    </Wrapper>
  );
};

export default App;
