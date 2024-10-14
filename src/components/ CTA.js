import React from 'react';
import styled from 'styled-components';

const CTAWrapper = styled.section`
  text-align: center;
  padding: 4rem 0;
  background-color: #007bff;
  color: white;
`;

const CTATitle = styled.h2`
  margin-bottom: 1rem;
`;

const CTAButton = styled.a`
  display: inline-block;
  background-color: white;
  color: #007bff;
  padding: 0.8rem 1.5rem;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  margin-top: 1rem;
`;

function CTA() {
  return (
    <CTAWrapper id="cta">
      <CTATitle>Ready to Start Learning?</CTATitle>
      <p>Join thousands of students already learning on EduTech</p>
      <CTAButton href="#">Sign Up Now</CTAButton>
    </CTAWrapper>
  );
}

export default CTA;
