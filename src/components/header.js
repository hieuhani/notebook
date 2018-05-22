import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: #222;
`
const Nav = styled.nav`
  display: flex;
  align-items: center;
`

const NavItems = styled.ul`
  display: flex;
  flex-direction: row;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
  margin-left: auto;

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

const Header = ({ siteTitle }) => (
  <Wrapper>
    <Nav className="container">
      <NavLogo to="/">
        {siteTitle}
      </NavLogo>
      <NavItems>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Portfolio</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Gallery</a>
        </li>
        <li>
          <a href="#">About me</a>
        </li>
      </NavItems>
    </Nav>
  </Wrapper>
)

export default Header
