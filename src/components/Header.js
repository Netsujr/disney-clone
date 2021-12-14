/* eslint-disable jsx-a11y/anchor-is-valid */
// for short cut use rsf (with props)
import React from 'react';
import styled from 'styled-components';
import { auth, provider } from "../firebase"
import Login from './Login';

function Header() {

  const handleAuth = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
      }).catch((error) => {
        alert(error.message)
      })
  }

  return (
    <Nav>
      <Logo src="/images/logo.svg" alt="" />
      <NavMenu>
        <a>
          <img src="/images/home-icon.svg" alt="" />
          <span> Home </span>
        </a>
        <a>
          <img src="/images/search-icon.svg" alt="" />
          <span> Search </span>
        </a>
        <a>
          <img src="/images/watchlist-icon.svg" alt="" />
          <span> Watchlist </span>
        </a>
        <a>
          <img src="/images/original-icon.svg" alt="" />
          <span> Originals </span>
        </a>
        <a>
          <img src="/images/movie-icon.svg" alt="" />
          <span> Movies </span>
        </a>
        <a>
          <img src="/images/series-icon.svg" alt="" />
          <span> Series </span>
        </a>
      </NavMenu>
      <UserImg src="/images/RenP.png" onClick={handleAuth} />
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;

  `

const Logo = styled.img`
  width: 80px;

  `

// flex 1 makes the navbar the most important component and pushes everything aside
const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 20px;
  cursor: pointer;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img{
      height: 20px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: "";
        height: 1px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opactity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }

    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
  `
// the styled component is what you want the html to be, in this case, img tag

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;

  `
