/* eslint-disable react/prop-types */
import React from "react";
import {
  Info,
  Link,
  LinkTitle,
  InfoAtrribution,
  InfoContent,
  LinkWrapper,
  Links,
  Wrapper,
} from "./Styles";
const Footer = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

Footer.LinkWrapper = function FooterLinkWrapper({ children }) {
  return <LinkWrapper>{children}</LinkWrapper>;
};
Footer.Links = function FooterLinks({ children }) {
  return <Links>{children}</Links>;
};
Footer.Link = function FooterLink({ text }) {
  return (
    <Link>
      <a href="#">{text}</a>
    </Link>
  );
};
Footer.LinkTitle = function FooterLinkTitle({ text }) {
  return <LinkTitle>{text}</LinkTitle>;
};
Footer.Info = function FooterInfo({ children }) {
  return <Info>{children}</Info>;
};
Footer.InfoContent = function FooterInfoContent({ text }) {
  return <InfoContent>{text}</InfoContent>;
};
Footer.InfoAtrribution = function FooterInfoAtrribution({ text }) {
  return <InfoAtrribution>{text}</InfoAtrribution>;
};
export default Footer;
