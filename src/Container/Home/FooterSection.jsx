import React from "react";
import styled from "styled-components";
import BrandLogo from "../../Components/Common/BrandLogo";
import Footer from "../../Components/Home/Footer/Footer";
import { Desktop } from "../../utils/BreakPoints";
const Container = styled.footer`
  background: #b39ad92e;
  padding-inline: ${({ theme }) => theme.spacing.margin};
  padding-block: 4rem;
  ${Desktop("padding-inline:3rem;")}
`;
const FooterSection = () => {
  return (
    <Container>
      <Footer>
        <Footer.Info>
          <BrandLogo />
          <Footer.InfoContent text="With Fiber you can setup your own personal porfolio in minutes with dozens o premade beautiful template" />
          <Footer.InfoAtrribution text="Made with love ❤️ from Neatherlands" />
        </Footer.Info>
        <Footer.LinkWrapper>
          <Footer.Links>
            <Footer.LinkTitle text="Sitemap" />
            <Footer.Link text="Home Page" />
            <Footer.Link text="Pricing" />
            <Footer.Link text="Testimonials" />
            <Footer.Link text="Features" />
          </Footer.Links>
          <Footer.Links>
            <Footer.LinkTitle text="Resources" />
            <Footer.Link text="Support" />
            <Footer.Link text="Contact" />
            <Footer.Link text="FAQ" />
          </Footer.Links>
          <Footer.Links>
            <Footer.LinkTitle text="Company" />
            <Footer.Link text="About" />
            <Footer.Link text="Customers" />
            <Footer.Link text="Blog" />
          </Footer.Links>
          <Footer.Links>
            <Footer.LinkTitle text="Portfolios" />
            <Footer.Link text="Sarah Andrews" />
            <Footer.Link text="Mathew Higgins" />
            <Footer.Link text="Janice Dave" />
          </Footer.Links>
        </Footer.LinkWrapper>
      </Footer>
    </Container>
  );
};

export default FooterSection;
