import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <Container>
      <TextBox>
        <h1>Welcome to Our Website</h1>
      </TextBox>
      <Image
        src="https://avatars.mds.yandex.net/i?id=be5733ecd591375c0b781074d1a6f2a54a21d7f1-5269099-images-thumbs&n=13"
        alt="Technology"
      />
      <TextBox>
        <p>
          We provide the best services to help you succeed. Explore our website
          to learn more about what we do.
        </p>
      </TextBox>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding: 50px;
`;

const Image = styled.img`
  width: 80%;
  max-width: 600px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const TextBox = styled.div`
  max-width: 600px;
  font-family: Arial, sans-serif;
`;

export default Home;
