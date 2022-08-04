/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";

const Wrapper = styled.menu`
  position: absolute;
  width: 80vw;
  margin: auto;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
  border-radius: 10px;
  background: ${({ theme }) => theme.color.accent};
  color: ${({ theme }) => theme.color.bgMain};
  z-index: 60;
  .signin {
    margin-bottom: 1rem;
    text-decoration: none;
  }
  .signup {
    align-self: stretch;
    display: grid;
}
  }
  @media (min-width: 1024px) {
    display: none;
  }
`;
const Menu = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Menu;
