/* eslint-disable react/prop-types */
import React from "react";
import { Wrapper, Title, Text } from "./Style";
const CtaContent = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

CtaContent.Title = function CtaContentTitle({ text }) {
  return <Title>{text}</Title>;
};
CtaContent.Text = function CtaContentText({ text }) {
  return <Text>{text}</Text>;
};

export default CtaContent;
