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
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png" />
          <span>Trailer</span>
        </TrailerButton>
        <AddButton>

        </AddButton>
        <GroupWatchButton>

        </GroupWatchButton>
      </Controls>
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

const Controls = styled.div`
  display: flex;

  `

const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  display: flex;
  align-items: center;
  height: 56px;
  border: none;
  padding: 0px 24px;
  margin-right: 22px;
  letter-spacing: 1.8px;
  cursor: pointer;
  background: rgb(249, 249, 249);

  &:hover {
    background: rgb(198, 198, 198);
  }

  `

const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  text-transform: uppercase;

   &:hover {
    background: rgb(128, 128, 128);
  }

  `

const AddButton = styled.button`

  `

const GroupWatchButton = styled.button`

  `
