import styled from "styled-components";
export const Wrapper = styled.div`
  margin-top: ${({ theme }) => theme.spacing.margin};
  width: 80vw;
  max-width: 500px;
  min-width: 300px;
`;
export const Error = styled.div`
  color: red;
  font-size: 1rem;
  margin-block: 0.5rem;
  font-family: ui-monospace;
`;
export const FormWrapper = styled.form`
  display: flex;
  padding-block-start: 2rem;
  flex-direction: column;
  gap: 1rem;
`;
export const Label = styled.label`
  font-weight: 500;
`;
export const Input = styled.input`
  border: 1.5px solid #c1bebe;
  padding: 1rem;
  width: 100%;
  border-radius: 5px;
  outline-color: ${(props) => props.error && "red"};
  &:focus,
  &:focus-visible {
    outline-color: ${(props) => props.error && "red"};
  }
`;
export const TermsWrapper = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  span > a {
    padding-inline-end: 1rem;
    font-weight: 700;
  }
`;
export const Button = styled.button`
  border: none;
  background: ${({ theme }) => theme.color.accent};
  color: white;
  padding-block: 1rem;
  font-size: 1rem;
  min-width: 100px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease-in;
  &:hover,
  &:focus,
  &:focus-visible {
    background: rgb(57, 40, 94);
  }
`;
export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.head};
  line-height: 1.3em;
`;
export const AlreadyUser = styled.div`
  margin-top: 1rem;
  text-align: center;
  a {
    text-decoration: none;
  }
`;
export const ForgotPassword = styled.div`
  margin-top: 1rem;
  text-align: center;
  a {
    text-decoration: none;
  }
`;

export const SignInProvider = styled.img`
  max-width: 15%;
  cursor: pointer;
`;
export const SignInProviders = styled.div`
  margin-block: 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
