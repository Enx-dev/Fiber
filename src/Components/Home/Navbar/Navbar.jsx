/* eslint-disable react/prop-types */
import React from "react";
import {
  MenuIcon,
  Wrapper,
  ResLink,
  ResLinks,
  ResWrapper,
  ResSignIn,
} from "./Styles";

const Navbar = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

Navbar.MenuIcon = function NavbarMenuicon({ src, toggleMenu }) {
  return (
    <MenuIcon
      onClick={() => toggleMenu((prev) => !prev)}
      src={src}
      alt="MenuIcon"
    />
  );
};

Navbar.ResLink = function NavbarResLink({ text }) {
  return <ResLink>{text}</ResLink>;
};
Navbar.ResLinks = function NavbarResLinks({ children }) {
  return <ResLinks>{children}</ResLinks>;
};
Navbar.ResWrapper = function NavbarResWrapper({ children }) {
  return <ResWrapper>{children}</ResWrapper>;
};
Navbar.ResSignIn = function NavbarResSignIn({ text }) {
  return <ResSignIn>{text}</ResSignIn>;
};

export default Navbar;
