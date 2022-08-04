/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";
import { Desktop } from "../../utils/BreakPoints";
const Btn = styled.button`
  border: none;
  background: ${({ theme, clr }) =>
    clr ? theme.color.bgMain : theme.color.accent};
  color: ${({ theme, clr }) => (clr ? theme.color.accent : theme.color.bgMain)};
  padding-block: 1rem;
  padding-inline: 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease-in;
  align-self: stretch;
  &:hover,
  &:focus,
  &:focus-visible {
    background: ${({ clr }) =>
      clr ? "rgba(255, 248, 235, 0.94)" : "rgb(57, 40, 94)"};
  }
  ${({ align }) => align && Desktop("align-self:baseline;")}
`;

const Button = ({ color, text, align }) => {
  return (
    <Btn align={align} clr={color}>
      {text}
    </Btn>
  );
};

export default Button;
