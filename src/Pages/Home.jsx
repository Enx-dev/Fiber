import React from "react";
import NavSection from "../Container/Home/NavSection";
import styled from "styled-components";
import HeroSection from "../Container/Home/HeroSection";
import AboutSection from "../Container/Home/AboutSection";
import CtaSection from "../Container/Home/CtaSection";
import TestimonialSection from "../Container/Home/TestimonialSection";
import FooterSection from "../Container/Home/FooterSection";

const Container = styled.section`
  min-height: 100vh;
`;
const Home = () => {
  return (
    <>
      <Container>
        <NavSection />
        <HeroSection />
        <AboutSection />
        <CtaSection />
        <TestimonialSection />
      </Container>{" "}
      <FooterSection />
    </>
  );
};

export default Home;
