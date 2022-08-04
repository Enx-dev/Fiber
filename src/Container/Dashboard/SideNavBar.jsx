import React, { useState } from "react";
import styled from "styled-components";
import SideNavbarComp from "../../Components/Dashbord/SIdeNav/SideNavbar";
import maleAvater from "../../Assets/avataaars.svg";
import closeIcon from "../../Assets/icons8-close.svg";
import { useAuth } from "../../Firebase/authContex";
import { Desktop } from "../../utils/BreakPoints";
const Container = styled.nav`
  ${Desktop("width:25%")}
`;
const SideNavBar = () => {
  const [menuToggle, setMenuToogle] = useState(false);
  const { user, SignOut } = useAuth();
  return (
    <Container>
      <SideNavbarComp>
        <SideNavbarComp.Avater src={user.photoURL || maleAvater} />
        <SideNavbarComp.MenuIcon open={setMenuToogle}>
          <path d="M24 4H0V0H24V4ZM24 8H0V12H24V8ZM24 16H0V20H24V16Z" fill="" />
        </SideNavbarComp.MenuIcon>
        {menuToggle && (
          <SideNavbarComp.MenuWrapper>
            <SideNavbarComp.CloseIcon close={setMenuToogle} src={closeIcon} />
            <SideNavbarComp.LinkWrapper>
              <SideNavbarComp.NavLink To="/home" text="Dashboard" />
              <SideNavbarComp.NavLink To="/home/profile" text="Profile" />
              <SideNavbarComp.NavLink To="/home/contact" text="Contact" />
              {/* <SideNavbarComp.NavLink To="/home/faq" text="Faq" /> */}
            </SideNavbarComp.LinkWrapper>
            <SideNavbarComp.Logout logout={SignOut} />
          </SideNavbarComp.MenuWrapper>
        )}
        <SideNavbarComp.DesktopWrapper>
          <SideNavbarComp.LinkWrapper>
            <SideNavbarComp.NavLink To="/home" text="Dashboard" />
            <SideNavbarComp.NavLink To="/home/profile" text="Profile" />
            <SideNavbarComp.NavLink To="/home/contact" text="Contact" />
            {/* <SideNavbarComp.NavLink To="/home/faq" text="Faq" /> */}
          </SideNavbarComp.LinkWrapper>
          <SideNavbarComp.Logout logout={SignOut} />
        </SideNavbarComp.DesktopWrapper>
      </SideNavbarComp>
    </Container>
  );
};

export default SideNavBar;
