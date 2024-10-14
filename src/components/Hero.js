import React from 'react';
import styled from 'styled-components';

const HeroWrapper = styled.section`
  text-align: center;
  padding: 4rem 0;
`;

const HeroTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

const CTAButton = styled.a`
  display: inline-block;
  background-color: #007bff;
  color: white;
  padding: 0.8rem 1.5rem;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
`;

function Hero() {
  return (
    <HeroWrapper>
      <HeroTitle>Welcome to EduTech</HeroTitle>
      <HeroSubtitle>Revolutionizing online education for everyone</HeroSubtitle>
      <CTAButton href="#cta">Get Started</CTAButton>
    </HeroWrapper>
  );
}

export default Hero;
