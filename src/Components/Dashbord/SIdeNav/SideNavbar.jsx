import React from "react";
import {
  Avater,
  LinkWrapper,
  Logout,
  NavLink,
  DesktopWrapper,
  Wrapper,
  MenuIcon,
  CloseIcon,
  MenuWrapper,
} from "./Styles";
const SideNavbar = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

SideNavbar.Logout = ({ logout }) => (
  <Logout onClick={() => logout()}>Logout</Logout>
);
SideNavbar.NavLink = ({ text, To }) => <NavLink to={To}>{text}</NavLink>;
SideNavbar.Avater = ({ src }) => <Avater src={src} />;
SideNavbar.CloseIcon = ({ src, close }) => (
  <CloseIcon onClick={() => close(false)} src={src} />
);
SideNavbar.MenuIcon = ({ children, open }) => (
  <MenuIcon
    onClick={() => open(true)}
    width="24"
    height="20"
    viewBox="0 0 24 20"
    fill="white">
    {children}
  </MenuIcon>
);
SideNavbar.LinkWrapper = ({ children }) => (
  <LinkWrapper>{children}</LinkWrapper>
);
SideNavbar.MenuWrapper = ({ children }) => (
  <MenuWrapper>{children}</MenuWrapper>
);
SideNavbar.DesktopWrapper = ({ children }) => (
  <DesktopWrapper>{children}</DesktopWrapper>
);

export default SideNavbar;
