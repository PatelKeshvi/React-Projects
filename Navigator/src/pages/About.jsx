import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <Container>
      <TextBox>
        <h1>About Us</h1>
      </TextBox>
      <Image
        src="https://avatars.mds.yandex.net/i?id=ffb6dbaaf3fe809384fce35d73d30058b99f6731-10512701-images-thumbs&n=13"
        alt="Our Team"
      />
      <TextBox>
        <p>
          We are a team of passionate professionals dedicated to delivering 
          high-quality services. Our mission is to help businesses grow and 
          achieve their goals with innovative solutions.
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

export default About;
