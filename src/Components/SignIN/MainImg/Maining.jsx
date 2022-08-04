/* eslint-disable react/prop-types */
import React from "react";
import { Img, Text, Title, Wrapper, ImgHolder } from "./Style";
const Maining = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

Maining.Text = function MainingText({ text }) {
  return <Text>{text}</Text>;
};
Maining.Title = function MainingTitle({ title }) {
  return <Title>{title}</Title>;
};
Maining.ImgHolder = function MainingImgHolder({ children }) {
  return <ImgHolder>{children}</ImgHolder>;
};
Maining.Img = function MainingImg({ src }) {
  return <Img src={src} />;
};
export default Maining;
