import React, { useState } from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby"

const MobileMenu = () => {
  const [isVisible, setIsVisible] = useState(false)

  const handleOnOpen = () => {
    setIsVisible(true)
    document.body.classList.add("nav-open")
  }

  const handleOnClose = () => {
    setIsVisible(false)
    document.body.classList.remove("nav-open")
  }

  return (
    <MainDiv>
      <StyledButtonOpen onClick={handleOnOpen}>
        <FontAwesomeIcon icon={faBars} />
      </StyledButtonOpen>

      <>
        {isVisible && (
          <BodyDiv>
            <StyledButtonClose onClick={handleOnClose}>
              <FontAwesomeIcon icon={faTimes} />
            </StyledButtonClose>
            <ul>
              <li>
                <MenuLink to="/">1</MenuLink>
              </li>
              <li>
                <MenuLink to="/">2</MenuLink>
              </li>
              <li>
                <MenuLink to="/">3</MenuLink>
              </li>
              <li>
                <MenuLink to="/">4</MenuLink>
              </li>
              <li>
                <MenuLink to="/">5</MenuLink>
              </li>
            </ul>
          </BodyDiv>
        )}
      </>
    </MainDiv>
  )
}
export default MobileMenu

const MenuLink = styled(Link)`
  display: flex;
  color: #000000;
  font-size: 30px;
  font-weight: bold;
  align-self: center;
  margin-top: 30px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`
const MainDiv = styled.div`
  display: flex;
`
const BodyDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  overflow-y: hidden;
  background-color: #fefef0;
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  li {
    list-style-type: none;
  }
`
const StyledButtonClose = styled.button`
  text-align: right;
  border: 0;
  padding: 16px;
  background: none;
  border: none;
  background: transparent;

  svg {
    font-size: 30px;
    color: #000000;
  }
`
const StyledButtonOpen = styled.button`
  border: none;
  background: transparent;
  padding: 0;
  margin-right: 10px;
  svg {
    font-size: 30px;
    color: #000000;
  }
`
