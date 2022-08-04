/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";
import { Desktop } from "../../../../utils/BreakPoints";
const HeroImage = styled.div`
  position: relative;
  top: -25px;
  img {
    width: 100vw;
    max-width: 100%;
  }
  ${Desktop("position:static;img{width:80vw}")}
`;

const HeroImg = ({ src }) => {
  return (
    <HeroImage src={src}>
      <img src={src} alt="" />
    </HeroImage>
  );
};

export default HeroImg;
