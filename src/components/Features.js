import React from 'react';
import styled from 'styled-components';

const FeaturesWrapper = styled.section`
  padding: 4rem 0;
`;

const FeaturesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FeatureItem = styled.div`
  text-align: center;
`;

const FeatureIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const FeatureTitle = styled.h3`
  margin-bottom: 0.5rem;
`;

function Features() {
  const features = [
    { icon: '📚', title: 'Extensive Library', description: 'Access thousands of courses' },
    { icon: '🎓', title: 'Expert Instructors', description: 'Learn from industry professionals' },
    { icon: '📱', title: 'Mobile Learning', description: 'Study anytime, anywhere' },
  ];

  return (
    <FeaturesWrapper id="features">
      <h2>Our Features</h2>
      <FeaturesList>
        {features.map((feature, index) => (
          <FeatureItem key={index}>
            <FeatureIcon>{feature.icon}</FeatureIcon>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <p>{feature.description}</p>
          </FeatureItem>
        ))}
      </FeaturesList>
    </FeaturesWrapper>
  );
}

export default Features;
