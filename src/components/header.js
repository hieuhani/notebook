import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: #282828;
`
const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding-left: 0 !important;
  padding-right: 0 !important;
`

const NavItems = styled.ul`
  display: flex;
  flex-direction: row;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
  ${({ right }) => right && 'margin-left: auto;'}
  > li > a {
    color: #FFF;
    padding: .5rem 1rem;
    display: block;
  }
`

const NavLogo = styled(Link)`
  color: #FFF;
  font-size: 1.5rem;
`

const TopBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem 0;
`
const SocialLinks = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  li {
    list-style: none;
    a {
      padding: 0 .5rem;
      color: #FFF;
      display: block;
      font-size: 1.5rem;
    }
  }
`

const Header = ({ siteTitle }) => (
  <Wrapper>
    <TopBar className="container">
      <NavLogo to="/">
        {siteTitle}
      </NavLogo>
      <SocialLinks>
        <li>
          <a href="#"><i className="icon ion-logo-github"/></a>
        </li>
        <li>
          <a href="#"><i className="icon ion-logo-facebook"/></a>
        </li>
        <li>
          <a href="#"><i className="icon ion-logo-linkedin"/></a>
        </li>
        <li>
          <a href="#"><i className="icon ion-logo-instagram"/></a>
        </li>
      </SocialLinks>
    </TopBar>
    <Nav className="container">
      <NavItems>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Portfolio</a>
        </li>
        <li>
          <a href="#">Gallery</a>
        </li>
        <li>
          <a href="#">About me</a>
        </li>
      </NavItems>
      <NavItems right>
        <li>
          <a href="#">Code</a>
        </li>
        <li>
          <a href="#">Design</a>
        </li>
        <li>
          <a href="#">Story</a>
        </li>
        <li>
          <a href="">Inspiration</a>
        </li>
      </NavItems>
    </Nav>
  </Wrapper>
)

export default Header
