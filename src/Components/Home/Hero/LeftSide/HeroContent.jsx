/* eslint-disable react/prop-types */
import React from "react";
import {
  Bottom,
  Link,
  Span,
  Text,
  Title,
  Wrapper,
  Mid,
  Rating,
  RatingStar,
  RatingStars,
  RatingText,
} from "./Styles";
const HeroContent = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

HeroContent.Title = function HeroContentTitle({ text }) {
  return <Title>{text}</Title>;
};
HeroContent.Text = function HeroContentText({ text }) {
  return <Text>{text}</Text>;
};
HeroContent.Link = function HeroContentLink({ text }) {
  return <Link>{text}</Link>;
};
HeroContent.RatingText = function HeroContentRatingText({ text }) {
  return <RatingText>{text}</RatingText>;
};
HeroContent.RatingStar = function HeroContentRatingStar({ src }) {
  return <RatingStar src={src} />;
};
HeroContent.Span = function HeroContentSpan({ children }) {
  return <Span>{children}</Span>;
};
HeroContent.RatingStars = function HeroContentRatingStars({ children }) {
  return <RatingStars>{children}</RatingStars>;
};
HeroContent.Bottom = function HeroContentBottom({ children }) {
  return <Bottom>{children}</Bottom>;
};
HeroContent.Rating = function HeroContentRating({ children }) {
  return <Rating>{children}</Rating>;
};
HeroContent.Mid = function HeroContentMid({ children }) {
  return <Mid>{children}</Mid>;
};

export default HeroContent;
