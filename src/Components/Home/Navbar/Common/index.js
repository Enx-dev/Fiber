import styled from "styled-components";

export const Links = styled.ul`
  list-style: none;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
`;
export const Link = styled.a`
  margin-bottom: 1rem;
  font-weight: 500;
  text-align: center;
  font-size: 1.3rem;
  cursor: pointer;
  display: block;
  position: relative;
  width: fit-content;
  color: ${({ theme }) => theme.color.bgMain};
  &:after {
    content: "";
    position: absolute;
    background: currentcolor;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 0;
    transition: all 0.8s ease;
  }
  &:hover {
    &:after {
      width: 100%;
    }
  }
`;
export const SignIn = styled.p`
  color: ${({ theme }) => theme.color.bgMain};
  margin-bottom: 1rem;
  font-weight: 500;
  cursor: pointer;
  font-size: 1.3rem;
`;
