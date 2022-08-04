import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Form from "../../Components/SignIN/Form/Form";
import BrandLogo from "../../Components/Common/BrandLogo";
import { useForm } from "react-hook-form";
import { Input } from "../../Components/SignIN/Form/Style";
import { useAuth } from "../../Firebase/authContex";
import googleImg from "../../Assets/google.png";
import { Link } from "react-router-dom";

const Container = styled.section`
  min-height: 100vh;

  display: grid;
  justify-content: center;
  padding-block-start: 3rem;
  padding-inline: ${({ theme }) => theme.spacing.margin};
`;

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const { SignInEmail, SignInGoogle, error } = useAuth();
  const { register, handleSubmit, setFocus } = useForm();

  const SubmitHandler = ({ email, password }) => {
    SignInEmail(email, password);
  };

  useEffect(() => {
    setFocus("email");
  }, [setFocus]);

  return (
    <Container>
      <BrandLogo />
      <Form>
        <Form.Title>Welcome back</Form.Title>
        <Form.FormWrapper submit={handleSubmit(SubmitHandler)}>
          <Form.Label name="E-mail">
            <Input
              type="email"
              {...register("email", {
                value: email,
                onChange: (e) => setEmail(e.target.value),
              })}
              placeholder="john@example.com"
            />
            {error === "Firebase: Error (auth/user-not-found)." && (
              <Form.Error text="No such account found. Sign up" />
            )}
          </Form.Label>
          <Form.Label name="Password">
            <Input
              type="password"
              {...register("password", {
                value: password,
                onChange: (e) => setPassword(e.target.value),
              })}
              placeholder="Enter your password"
            />
            {error === "Firebase: Error (auth/wrong-password)." && (
              <Form.Error text="Incorrect Password" />
            )}
          </Form.Label>
          <Form.Button>Create Fiber account</Form.Button>
        </Form.FormWrapper>
        <Form.SignInProviders>
          <Form.SignInProvider handleLogin={SignInGoogle} src={googleImg} />
        </Form.SignInProviders>
        <Form.ForgotPassword>
          <Link to="/resetpassword">Forgot Password?</Link>
        </Form.ForgotPassword>
        <Form.AlreadyUser>
          No account? no problem <Link to="/signup">Sign Up</Link>
        </Form.AlreadyUser>
      </Form>
    </Container>
  );
};

export default SignIn;
