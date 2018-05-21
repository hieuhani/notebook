import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: #222;
`
const Nav = styled.nav`
  display: flex;
`

const Header = ({ siteTitle }) => (
  <Wrapper>
    <Nav className="container">
      <Link
        to="/"
        className="navbar-brand"
      >
        {siteTitle}
      </Link>
      <ul>
        <li>
          <a href="#">Home</a>
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
      </ul>
    </Nav>
  </Wrapper>
)

export default Header
