import styled from "styled-components";
import { Link, Links, SignIn } from "../Common";
import { Desktop } from "../../../../utils/BreakPoints";
export const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block-start: ${({ theme }) => theme.spacing.padding};
  z-index: 50;
  position: relative;
  padding-inline: ${({ theme }) => theme.spacing.margin};
  background-color: ${({ theme }) => theme.color.bgMain};
  ${Desktop("justify-content: space-between;padding-inline:4rem;")}
`;
export const MenuIcon = styled.img`
  cursor: pointer;
  ${Desktop("display:none;")}
`;

export const ResWrapper = styled.div`
  ${Desktop("display:flex")}
  display:none;
  width: 70%;
  justify-content: space-between;
  align-items: center;
`;

export const ResLink = styled(Link)`
  color: black;
  margin-bottom: 0;
  font-weight: 100;
  font-size: 1rem;
`;
export const ResLinks = styled(Links)`
  display: none;
  ${Desktop(
    "display:flex;flex-direction:row;gap:3rem;width: 50%;margin-block-end: 0;"
  )}
`;
export const ResSignIn = styled.div`
  display: none;
  ${Desktop("color:black;font-weight:100;margin-bottom:0;display:block;")}
`;
