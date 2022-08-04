/* eslint-disable react/prop-types */
import React from "react";
import {
  AlreadyUser,
  Button,
  FormWrapper,
  SignInProvider,
  SignInProviders,
  Label,
  TermsWrapper,
  Title,
  Wrapper,
  Error,
  ForgotPassword,
} from "./Style";
const Form = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

Form.Title = ({ children }) => <Title>{children}</Title>;
Form.Title.displayName = "Title";
Form.Label = ({ children, name }) => (
  <Label>
    {name}
    {children}
  </Label>
);
Form.Error = ({ text }) => <Error>{text}</Error>;
Form.Label.displayName = "Label";
Form.Button = ({ children }) => <Button>{children}</Button>;
Form.Button.displayName = "Button";
Form.AlreadyUser = ({ children }) => <AlreadyUser>{children}</AlreadyUser>;
Form.AlreadyUser.displayName = "AlreadyUser";
Form.FormWrapper = ({ children, submit }) => (
  <FormWrapper onSubmit={submit}>{children}</FormWrapper>
);
Form.TermsWrapper = ({ children }) => <TermsWrapper>{children}</TermsWrapper>;
Form.SignInProviders = ({ children }) => (
  <SignInProviders>{children}</SignInProviders>
);
Form.ForgotPassword = ({ children }) => (
  <ForgotPassword>{children}</ForgotPassword>
);
Form.SignInProvider = ({ src, handleLogin }) => (
  <SignInProvider onClick={() => handleLogin()} src={src} />
);

export default Form;
