import React from "react";
import { CustomBtn, Title, Wrapper } from "./Styles";
const Dashboard = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

Dashboard.Title = ({ title }) => <Title>{title}</Title>;
Dashboard.CustomBtn = () => <CustomBtn>Create Now</CustomBtn>;

export default Dashboard;
