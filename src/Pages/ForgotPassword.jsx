import React, { useState } from "react";
import Form from "../Components/SignIN/Form/Form";
import { Button, Input } from "../Components/SignIN/Form/Style";
import styled from "styled-components";
import { useAuth } from "../Firebase/authContex";

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    margin-block: 1rem;
  }
`;

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const { ForgotPassword, error } = useAuth();
  return (
    <Container>
      <Form>
        <Form.Label name="Enter your email address">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error === "Firebase: Error (auth/invalid-email)." && (
            <Form.Error text="enter a valid Email address" />
          )}
          {error === "Firebase: Error (auth/missing-email)." && (
            <Form.Error text="Enter an Email address" />
          )}
          {error === "Firebase: Error (auth/user-not-found)." && (
            <Form.Error text="Account Does not exist" />
          )}
        </Form.Label>
        <Button onClick={() => ForgotPassword(email)}>Reset</Button>
      </Form>
    </Container>
  );
};

export default ForgotPasswordPage;
