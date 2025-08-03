import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 900px;
  margin: 80px auto 40px;
  padding: 20px;
  font-family: ${({ theme }) => theme.font};

  @media (max-width: 480px) {
    margin: 70px 15px 30px; 
    padding: 10px;
  }
`;

const Title = styled.h1`
  margin-bottom: 15px;
`;

const Contact: React.FC = () => (
  <Container>
    <Title>Contact Us</Title>
    <p>You can contact us at contact@myapp.com or call +123456789.</p>
  </Container>
);

export default Contact;
