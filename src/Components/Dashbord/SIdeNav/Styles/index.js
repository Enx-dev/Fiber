import styled from "styled-components";
import { Link } from "react-router-dom";
import { Desktop } from "../../../../utils/BreakPoints";

export const Wrapper = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  background-color: ${({ theme }) => theme.color.accent};
  box-shadow: -2px 16px 15px 2px hsl(0deg 0% 0% / 16%);
  ${Desktop(
    "height:100%;min-height:100vh;box-shadow: inset -20px 0px 20px 0px #3b3f5e73;"
  )}
`;

export const MenuWrapper = styled.div`
  position: fixed;
  z-index: 3000;
  ${Desktop("display:none;")}
  top: 0;
  right: 0;
  bottom: 0;
  background: hsla(258, 78%, 48%, 0.2);
  box-shadow: ;
  box-shadow: -5px 8px 32px 5px hsl(258deg 10% 27% / 70%);
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  width: 80vw;
  max-width: 250px;
  padding-block-start: 2rem;
  padding-inline: 2rem;
  display: flex;
  flex-direction: column;
`;
export const DesktopWrapper = styled.div`
  display: none;
  ${Desktop("display:block;")}
`;
export const LinkWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  color: white;
  margin-block: 2rem;
  gap: 1.5rem;
  font-size: 1.5rem;
  font-weight: 500;
  text-transform: uppercase;
  ${Desktop("Padding-inline-start:2rem;gap:3rem")}
`;
export const NavLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  // color: ${({ theme }) => theme.color.darkText};
  width: fit-content;
  position: relative;
  @media (min-width: 1024px) {
    color: ${({ theme }) => theme.color.bgMain};
  }
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
export const Logout = styled.button`
  margin-top: 3rem;
  position: absolute !important;
  bottom: 30px;
  left: 0;
  right: 0;
  margin: auto;
  width: 200px;
  border: none;
  background: ${({ theme }) => theme.color.accent};
  color: ${({ theme }) => theme.color.bgMain};
  @media (min-width: 1024px) {
    color: ${({ theme }) => theme.color.accent};
    background: ${({ theme }) => theme.color.bgMain};
  }
  padding-block: 1rem;
  padding-inline: 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  -webkit-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
  -webkit-align-self: stretch;
  -ms-flex-item-align: stretch;
  align-self: stretch;
`;
export const Avater = styled.img`
  width: 70px;
  border-radius: 50%;
  ${Desktop(
    "position: absolute;top:10px;left: 0;right: 0;margin: auto;width: 150px;"
  )}
`;
export const MenuIcon = styled.svg`
  width: 40px;
  cursor: pointer;
  ${Desktop("display:none;")}
`;
export const CloseIcon = styled.img`
  width: 40px;
  cursor: pointer;
  align-self: end;
  margin-bottom: 5rem;
`;
