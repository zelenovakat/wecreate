import React from "react"
import styled from "styled-components"
import MobileMenu from "../components/firstPage/MobileMenu"
import { mediaSmall, mediaXs } from "../components/Screen"
import { Link } from "gatsby"
import logoImg from "../images/logo.png"

const Header = () => (
  <MainDiv>
    <StyledLink to="/">
      <img src={logoImg} alt="" />
    </StyledLink>
    <MobileMenuDiv>
      <MobileMenu />
    </MobileMenuDiv>
    <Menu>
      <li>
        <MenuLink to="/404.js">1</MenuLink>
      </li>
      <li>
        <MenuLink to="/404.js">2</MenuLink>
      </li>
      <li>
        <MenuLink to="/404.js">3</MenuLink>
      </li>
      <li>
        <MenuLink to="/404.js">4</MenuLink>
      </li>
      <li>
        <MenuLink to="/404.js">5</MenuLink>
      </li>
    </Menu>
  </MainDiv>
)
export default Header
const MobileMenuDiv = styled.div`
  display: flex;

  ${mediaSmall} {
    display: none;
  }
`
const StyledLink = styled(Link)`
  font-size: 30px;
  font-family: Rokkitt, serif;
  margin-left: 10px;
  img {
    margin: 0;
    padding-left: 5px;
    width: 70%;
  }
`
const MainDiv = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #fefef0;
  padding: 20px;
`
const Menu = styled.ul`
  display: none;
  align-items: center;
  list-style: none;
  margin: 0;

  ${mediaXs} {
    display: flex;
  }

  li {
    margin: 0;
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }

  a {
    font-size: 16px;
    text-decoration: none;
  }
`

const MenuLink = styled(Link)`
  padding: 16px;
  color: #000000;
`
