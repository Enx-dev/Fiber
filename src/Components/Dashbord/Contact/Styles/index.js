import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;
export const Form = styled.form`
  display: flex;
  max-width: 700px;
  width: 100vw;
  min-width: 300px;
  flex-direction: column;
`;
export const Label = styled.label`
  margin-bottom: 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.color.accent};
  font-weight: 700;
  input {
    display: block;
    width: 100%;
    padding-block: 1rem;
    border-radius: 10px;
    padding-inline: 1rem;
    border: 1px solid;
    font-size: 1.2rem;
    &:focus,
    &:focus-visible {
      outline: none;
    }
  }
  textarea {
    font-size: 1.2rem;
    width: 100%;
    height: 200px;
    padding: 1rem;
    border-radius: 10px;
  }
`;
export const Textarea = styled.textarea`
  font-size: 1.2rem;
  width: 100%;
  height: 200px;
  padding: 1rem;
  border-radius: 10px;
`;
export const Btn = styled.button`
  font-size: 1.5rem;
  font-weight: 700;
  border: none;
  max-width: 300px;
  color: white;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.accent};
  padding: 1rem;
  cusor: pointer;
`;
