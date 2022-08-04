import React from "react";
import star from "../../Assets/star.svg";
import HeroContent from "../../Components/Home/Hero/LeftSide/HeroContent";
import checkIcon from "../../Assets/Checkmark.svg";
import HeroImg from "../../Components/Home/Hero/RightSide/HeroImg";
import Button from "../../Components/Common/Button";
import styled from "styled-components";
import heroImg from "../../Assets/hero-Illustration.png";
import { Desktop } from "../../utils/BreakPoints";
import { Link } from "react-router-dom";
const HeroContainer = styled.section`
  padding-inline: ${({ theme }) => theme.spacing.margin};
  background-color: ${({ theme }) => theme.color.bgMain};
  ${Desktop(
    "display: flex;flex-direction: row-reverse;align-items: center; padding-block:3rem;padding-inline:4rem;"
  )}
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroImg src={heroImg} />
      <HeroContent>
        <HeroContent.Rating>
          <HeroContent.RatingStars>
            <HeroContent.RatingStar src={star} />
            <HeroContent.RatingStar src={star} />
            <HeroContent.RatingStar src={star} />
            <HeroContent.RatingStar src={star} />
            <HeroContent.RatingStar src={star} />
          </HeroContent.RatingStars>
          <HeroContent.Text text="Rated 4.8/5 (292 reviews)" />
        </HeroContent.Rating>
        <HeroContent.Title text="Create your portfoilo in minutes" />
        <HeroContent.Text text="With Fiber you can setup your personal portfoilo in minutes with dozens of premade beautiful templates" />
        <HeroContent.Mid>
          <Link to="/signup">
            <Button text="Start Free Trial" />
          </Link>
          <HeroContent.Link text="View Examples" />
        </HeroContent.Mid>

        <HeroContent.Bottom>
          <HeroContent.Span>
            <img src={checkIcon} alt="" />
            <p>No Credit Card Required</p>
          </HeroContent.Span>
          <HeroContent.Span>
            <img src={checkIcon} alt="" />
            <p>10 Free Templates</p>
          </HeroContent.Span>
        </HeroContent.Bottom>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
