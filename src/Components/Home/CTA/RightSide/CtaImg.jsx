/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";

const AboutImg = styled.img`
  max-width: 100%;
  height: 400px;
`;
const CtaClone = ({ src }) => {
  return <AboutImg src={src} />;
};

export default CtaClone;
