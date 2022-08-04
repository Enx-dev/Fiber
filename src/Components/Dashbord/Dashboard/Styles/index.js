import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-inline: 2rem;
  text-align: center;
  color: ${({ theme }) => theme.color.darkText};
`;
export const Title = styled.h1`
  max-width: 700px;
`;
export const CustomBtn = styled.button`
  padding-block: 1rem;
  border-radius: 0.5rem;
  background-color: transparent;
  max-width: 700px;
  min-width: 300px;
  border: 2px solid ${({ theme }) => theme.color.accent};
  margin-top: 1rem;
  color: ${({ theme }) => theme.color.darkText};
  font-size: 1.5rem;
  font-weight: 700;
`;
