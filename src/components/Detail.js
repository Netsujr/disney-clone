import React from 'react';
import styled from "styled-components";

const Detail = () => {
  return (
    <Container>
      <Background>
        <img src="/images/cars-poster.png" />
      </Background>

      <ImageTitle>
        <img src="/images/carro.png" />
      </ImageTitle>

    </Container>
  );
};

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw - 5px);
  position: relative;

  `

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  `

const ImageTitle = styled.div`
  height: 25vh;
  min-height: 120px;
  width: 30vw;
  min-width: 150px;
  margin-top: 20px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  `
