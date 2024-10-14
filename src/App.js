import React from 'react';
import styled from 'styled-components';
import GlobalStyles from './styles/ GlobalStyles';
import Header from './components/   Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/ Testimonials';
import CTA from './components/ CTA';
import Footer from './components/Footer';

const AppWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <AppWrapper>
        <Header />
        <main>
          <Hero />
          <Features />
          <Testimonials />
          <CTA />
        </main>
        <Footer />
      </AppWrapper>
    </>
  );
}

export default App;
