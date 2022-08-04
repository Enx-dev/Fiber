/* eslint-disable react/prop-types */
import React from "react";
import {
  Card,
  CardBtn,
  CardContent,
  CardTop,
  Wrapper,
  CardImg,
  CardInfo,
  CardName,
  CardRev,
} from "./Styles";
const Testimonial = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

Testimonial.Card = function TestimonialCard({ children }) {
  return <Card>{children}</Card>;
};
Testimonial.CardBtn = function TestimonialCardBtn({ name }) {
  return <CardBtn>View {name}&apos;s portfolio </CardBtn>;
};
Testimonial.CardContent = function TestimonialCardContent({ text }) {
  return <CardContent>{text}</CardContent>;
};
Testimonial.CardTop = function TestimonialCardTop({ children }) {
  return <CardTop>{children}</CardTop>;
};
Testimonial.CardImg = function TestimonialCardImg({ src }) {
  return <CardImg src={src} />;
};
Testimonial.CardRev = function TestimonialCardRev({ rev }) {
  return <CardRev>${rev}k in revenue</CardRev>;
};
Testimonial.CardInfo = function TestimonialCardInfo({ children }) {
  return <CardInfo>{children}</CardInfo>;
};
Testimonial.CardName = function TestimonialCardName({ name }) {
  return <CardName>{name}</CardName>;
};

export default Testimonial;
