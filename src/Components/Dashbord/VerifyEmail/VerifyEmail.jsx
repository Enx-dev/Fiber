import React from "react";
import { Text, VerifyBtn, Wrapper } from "./Styles";
const VerifyEmail = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

VerifyEmail.Text = ({ text }) => <Text>{text}</Text>;

VerifyEmail.VerifyBtn = ({ verify }) => (
  <VerifyBtn onClick={() => verify()}>Verify Now</VerifyBtn>
);

export default VerifyEmail;
