import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
`;

const Nav = styled.nav`
  ul {
    display: flex;
    list-style: none;
  }

  li {
    margin-left: 1rem;
  }

  a {
    text-decoration: none;
    color: #333;
  }
`;

function Header() {
  return (
    <HeaderWrapper>
      <Logo>EduTech</Logo>
      <Nav>
        <ul>
          <li><a href="#features">Features</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#cta">Get Started</a></li>
        </ul>
      </Nav>
    </HeaderWrapper>
  );
}

export default Header;

