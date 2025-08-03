import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 900px;
  margin: 80px auto 40px;
  padding: 20px;
  font-family: ${({ theme }) => theme.font};
`;

const Title = styled.h1`
  margin-bottom: 15px;
`;

const About: React.FC = () => (
  <Container>
    <Title>About Us</Title>
    <p>This page describes the company and its mission.</p>
  </Container>
);

export default About;
