import React, { useEffect } from "react";
import { useAuth } from "../Firebase/authContex";
import { useNavigate, Outlet } from "react-router-dom";
import SideNavBar from "../Container/Dashboard/SideNavBar";
import styled from "styled-components";
import { Desktop } from "../utils/BreakPoints";
import VerifyEmail from "../Container/Dashboard/VerifyEmail";
const Container = styled.main`
  ${Desktop("display:flex;")}
  position:relative;
`;

const Layout = () => {
  const { user } = useAuth();
  return (
    <Container>
      <SideNavBar />
      <Outlet />
      {!user.emailVerified && <VerifyEmail />}
    </Container>
  );
};

export default Layout;
