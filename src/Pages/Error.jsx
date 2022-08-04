import React from "react";
import errorImg from "../Assets/404.gif";
import styled from "styled-components";

const ErrorPage = styled.section`
  min-height: 100vh;
  display: grid;
  justify-items: center;
  align-items: center;
`;

const Error = () => {
  return (
    <ErrorPage>
      <img src={errorImg} alt="" />
    </ErrorPage>
  );
};

export default Error;
