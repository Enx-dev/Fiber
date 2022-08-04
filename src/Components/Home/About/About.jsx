/* eslint-disable react/prop-types */
import React from "react";
import {
  SubTitle,
  Title,
  Wrapper,
  CardContent,
  CardTitle,
  CardWrapper,
  CardContainer,
  CardImage,
} from "./Styles";
const About = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};
About.SubTitle = function AboutSubTitle({ text }) {
  return <SubTitle>{text}</SubTitle>;
};
About.Title = function AboutTitle({ text }) {
  return <Title>{text}</Title>;
};
About.CardWrapper = function AboutCardWrapper({ children }) {
  return <CardWrapper>{children}</CardWrapper>;
};
About.CardContent = function AboutCardContent({ text }) {
  return <CardContent>{text}</CardContent>;
};
About.CardTitle = function AboutCardTitle({ text }) {
  return <CardTitle>{text}</CardTitle>;
};
About.CardContainer = function AboutCardContainer({ children }) {
  return <CardContainer>{children}</CardContainer>;
};
About.CardImage = function AboutCardImage({ src }) {
  return <CardImage src={src} />;
};

export default About;
