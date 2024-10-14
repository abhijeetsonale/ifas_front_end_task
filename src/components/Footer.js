import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #333;
  color: white;
  padding: 2rem 0;
  text-align: center;
`;

function Footer() {
  return (
    <FooterWrapper>
      <p>&copy; 2023 EduTech. All rights reserved.</p>
    </FooterWrapper>
  );
}

export default Footer;

