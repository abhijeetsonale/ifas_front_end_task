import React from 'react';
import styled from 'styled-components';

const TestimonialsWrapper = styled.section`
  padding: 4rem 0;
  background-color: #f8f9fa;
`;

const TestimonialsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const TestimonialItem = styled.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const TestimonialText = styled.p`
  font-style: italic;
  margin-bottom: 1rem;
`;

const TestimonialAuthor = styled.p`
  font-weight: bold;
`;

function Testimonials() {
  const testimonials = [
    { text: "EduTech has transformed my learning experience!", author: "John Doe" },
    { text: "I've never found online courses so engaging before.", author: "Jane Smith" },
    { text: "The quality of instruction is unparalleled.", author: "Bob Johnson" },
  ];

  return (
    <TestimonialsWrapper id="testimonials">
      <h2>What Our Students Say</h2>
      <TestimonialsList>
        {testimonials.map((testimonial, index) => (
          <TestimonialItem key={index}>
            <TestimonialText>"{testimonial.text}"</TestimonialText>
            <TestimonialAuthor>- {testimonial.author}</TestimonialAuthor>
          </TestimonialItem>
        ))}
      </TestimonialsList>
    </TestimonialsWrapper>
  );
}

export default Testimonials;
