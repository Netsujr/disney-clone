/* eslint-disable jsx-a11y/anchor-is-valid */
// for short cut use rsf (with props)
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom"
import {
  selectUserName,
  selectUserPhoto,
  setUserLogin,
  setSignOut,
} from "../features/user/userSlice";
import { useSelector, useDispatch } from "react-redux"

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  const signIn = () => {
    auth
    .signInWithPopup(provider)
    .then((result) => {
        let user = result.user
        dispatch(setUserLogin({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL
        }))
        navigate("/")
      }).catch((error) => {
        alert(error.message)
      })
    }

    useEffect(() => {
      auth.onAuthStateChanged(async (user) => {
        if (user) {
          dispatch(setUserLogin({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL
          }))
          navigate("/")
        }
      })
    }, [])

  const signOut = () => {
    auth.signOut()
      .then(() => {
        dispatch(setSignOut());
        navigate("/login")
      })
  }

  return (
    <Nav>
      <Logo src="/images/logo.svg" alt="" />
      {!userName ? (
        <LoginContainer>
          <Login onClick={signIn} >Login</Login>
        </LoginContainer>
      ) :
        <>
          <NavMenu>
            <a href="/">
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
          <UserImg src={userPhoto} alt={userName} onClick={signOut} />
        </>
      }
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
    text-decoration: none;
    color: white;

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
const Login = styled.div`
  border: 1px solid #f9f9f9;
  padding: 8px 16px;
  border-radius: 4px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  transition: all 250ms ease 0s;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;

  }

  `

const LoginContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  `
