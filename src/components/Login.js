import React from 'react';
import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <Content>
        <LogoOne src="/images/cta-logo-one.svg" />
        <SignUp>GET ALL THREE</SignUp>
        <Description>
          Get access to all the streaming service plus futures services for just $999 a month! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto nobis voluptatem, ullam mollitia, voluptatum similique unde illum qui earum magnam quidem excepturi? Molestias culpa dolore ea sed, officiis facilis facere.
        </Description>
        <LogoTwo src="/images/cta-logo-two.png" />
      </Content>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  align-items: top;
  justify-content: center;


  &:before {
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    content: "";
    background-image: url("/images/login-background.jpg");
    opacity: 0.7;

    z-index: -1;

  }
  `

const Content = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  align-items: center;
  `

const LogoOne = styled.img`

  `

const LogoTwo = styled.img`
  width: 90%;

  `
const SignUp = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  text-align: center;
  padding: 17px 0;
  border-radius: 5px;
  color: #f9f9f9;
  font-size: 18px;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-bottom: 10px;



  &:hover {
    background-color: #0483ee;
  }
  `

const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1px;
  text-align: center;
  line-height: 1.3;

  `
