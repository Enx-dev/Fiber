import React, { useEffect, useState } from "react";
import Form from "../../Components/SignIN/Form/Form";
import { Input } from "../../Components/SignIN/Form/Style";
import Maining from "../../Components/SignIN/MainImg/Maining";
import styled from "styled-components";
import BrandLogo from "../../Components/Common/BrandLogo";
import mainImg from "../../Assets/Sign Up Image.png";
import { Desktop } from "../../utils/BreakPoints";
import { useForm } from "react-hook-form";
import { useAuth } from "../../Firebase/authContex";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { ErrorMessage } from "@hookform/error-message";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from "react-toastify";
import googleImg from "../../Assets/google.png";

const Container = styled.section`
  min-height: 100vh;
  gap:2rem;
  ${Desktop("display:flex;")}
}
`;
const Container2 = styled.div`
  padding-block-start: 3rem;
  padding-inline-start: 3rem;
  width:100%;
}
`;

const SignInContainer = () => {
  const schema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup.string().email().required("Email is required"),
    password: yup
      .string()
      .min(8)
      .matches(/([A-Z])/, "at least one Uppercase")
      .matches(/([a-z])/, "at least one lowercase")
      .matches(/(?=.*\d)/, "at least one digit"),
  });
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [hash, setHash] = useState("password");
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
    clearErrors,
  } = useForm({ resolver: yupResolver(schema) });

  const { SignUpEmail, error, SignInGoogle } = useAuth();
  useEffect(() => {
    setFocus("name");
  }, [error]);

  const SubmitHandler = ({ name, email, password }) => {
    SignUpEmail(email, password, name);
  };
  return (
    <>
      <Container>
        <Container2>
          <BrandLogo />
          <Form>
            <Form.Title>Create your Fiber account</Form.Title>
            <Form.FormWrapper submit={handleSubmit(SubmitHandler)}>
              <Form.Label name="Your Name">
                <Input
                  error={errors.name}
                  type="text"
                  {...register("name", {
                    value: name,
                    onChange: (e) => setName(e.target.value),
                  })}
                  placeholder="John Doe"
                />
                <ErrorMessage
                  name="name"
                  errors={errors}
                  render={({ message }) => <Form.Error text={message} />}
                />
              </Form.Label>
              <Form.Label name="E-mail">
                <Input
                  error={errors.email}
                  onBlur={() => clearErrors("email")}
                  type="email"
                  {...register("email", {
                    value: email,
                    onChange: (e) => setEmail(e.target.value),
                  })}
                  placeholder="john@example.com"
                />
                <ErrorMessage
                  name="email"
                  errors={errors}
                  render={({ message }) => <Form.Error text={message} />}
                />
              </Form.Label>
              <Form.Label name="Password">
                <Input
                  error={errors.password}
                  onBlur={() => clearErrors("password")}
                  type="password"
                  {...register("password", {
                    value: password,
                    onChange: (e) => setPassword(e.target.value),
                    // pattern: /^(a-zA-Z0-9\W){5,}$/,
                  })}
                  placeholder="At least 8 Characters"
                />
                <ErrorMessage
                  name="password"
                  errors={errors}
                  render={({ message }) => <Form.Error text={message} />}
                />
              </Form.Label>
              <Form.TermsWrapper>
                <input required type="checkbox" name="" id="" />
                <span>
                  By creating an account on Fiber, you agree to the{" "}
                  <a href="#">Terms & Condition</a>
                </span>
              </Form.TermsWrapper>
              <Form.Button>Create Fiber account</Form.Button>
            </Form.FormWrapper>
            <Form.SignInProviders>
              <Form.SignInProvider handleLogin={SignInGoogle} src={googleImg} />
            </Form.SignInProviders>
            <Form.AlreadyUser>
              Already have an account? <Link to="/signin"> Sign In</Link>
            </Form.AlreadyUser>
          </Form>
        </Container2>
        <Maining>
          <Maining.ImgHolder>
            <Maining.Img src={mainImg} />
          </Maining.ImgHolder>

          <Maining.Title title="Unparalled Templates" />
          <Maining.Text text="Crafted by a team of professional designers, Our templates are unparalled in the market" />
        </Maining>
      </Container>
    </>
  );
};

export default SignInContainer;
