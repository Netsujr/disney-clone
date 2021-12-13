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
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src="/images/group-icon.png" />
          <span></span>
        </GroupWatchButton>
      </Controls>
      <SubTitle>
        2018 • 7m • Family, Fantasy, Kids, Animation
      </SubTitle>
      <Description>
        Lightning McQueen is a cocky, rookie race car. Speeding on his way to a big race, he crashes into Radiator Springs, causing alot of destruction. McQueen must learn to respect and bond with the Radiator Springs inhabitants in order to get out of the town and back on the racetracks.
      </Description>
    </Container>
  );
};

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: calc(3.5vw - 5px);
  position: relative;

  `

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.3;

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
  margin: 10px 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  `

const Controls = styled.div`
  display: flex;
  align-items: center;
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
    background: rgba(198, 198, 198, 0.9);
  }

  `

const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  text-transform: uppercase;

  &:hover {
    background: rgba(128, 128, 128, 0.3);
  }

  `

const AddButton = styled.button`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  cursor: pointer;
  margin-right: 16px;

  span {
    font-size: 30px;

  }

  &:hover {
    background: rgba(198, 198, 198, 0.2);
  }
  `

const GroupWatchButton = styled(AddButton)`
  background-color: rgba(0, 0, 0, 0.6);
  `

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  padding: 10px;
  width: fit-content;
  `

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(249, 249, 249);
  // background-color: rgba(0, 0, 0, 0.4);
  // border-radius: 10px;
  // padding: 10px;
  max-width: 700px;
  text-align: justify;
  `
