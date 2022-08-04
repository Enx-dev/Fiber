import styled from "styled-components";
import { Desktop } from "../../../../utils/BreakPoints";
export const Wrapper = styled.div`
  ${Desktop("display:flex;")}
`;
export const Info = styled.div`
  margin-bottom: 1.3rem;
  color: ${({ theme }) => theme.color.text};
  ${Desktop("width:100%;")}
`;
export const InfoContent = styled.p`
  margin-top: 0.6rem;
  margin-bottom: 0.6rem;
  padding-inline-end: 2.5rem;
`;
export const InfoAtrribution = styled.p``;
export const LinkWrapper = styled.div`
  ${Desktop("width:100%;display:flex;gap:2rem;")}
`;
export const Links = styled.ul`
  list-style: none;
  margin-bottom: 1rem;
`;
export const LinkTitle = styled.h1`
  margin-bottom: 0.8rem;
  font-size: 1.3rem;
`;
export const Link = styled.li`
  margin-bottom: 0.6rem;
  font-size: 1rem;
  cursor: pointer;
  position: relative;
  width: fit-content;
  a {
    color: ${({ theme }) => theme.color.text};
    text-decoration: none;
  }

  &:after {
    content: "";
    position: absolute;
    background: black;
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
