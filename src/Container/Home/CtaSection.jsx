import React from "react";
import styled from "styled-components";
import Button from "../../Components/Common/Button";
import CtaImg from "../../Components/Home/CTA/RightSide/CtaImg";
import CtaContent from "../../Components/Home/CTA/Leftside/CtaContent";
import ctaImg from "../../Assets/Page Image.png";
import { Desktop } from "../../utils/BreakPoints";
import { Link } from "react-router-dom";
const Container = styled.section`
  background-color: ${({ theme }) => theme.color.accent};
  padding: ${({ theme }) => theme.spacing.margin};
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-inline: ${({ theme }) => theme.spacing.margin};
  ${Desktop("flex-direction:row;align-items:center;margin-inline:4rem;")}
`;

const CtaSection = () => {
  return (
    <Container>
      <CtaContent>
        <CtaContent.Title text="Diversify your Portfoilo" />
        <CtaContent.Text text="Create even more impressive portfoilo by creating case studies for your projects. Simply follow our step-by-step guide" />
        <Link to="/signup">
          <Button align={true} color text="Start Free Trial" />
        </Link>
      </CtaContent>
      <CtaImg src={ctaImg} />
    </Container>
  );
};

export default CtaSection;
