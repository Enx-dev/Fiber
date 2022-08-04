import styled from "styled-components";
import { Desktop } from "../../../../utils/BreakPoints";
export const Wrapper = styled.aside`
  bottom: 0;
  right: 0;
  width: 100vw;
  ${Desktop("width:60vw;left:20vw;margin:auto;position: absolute;")}
  padding-block: 1rem;
  background-color: ${({ theme }) => theme.color.accent};
  padding-inline: 1rem;
`;
export const Text = styled.p`
  color: white;
  font-size: 1rem;
`;
export const VerifyBtn = styled.button`
  padding-block: 0.5rem;
  margin-top: 0.5rem;
  cursor: pointer;
  padding-inline: 2rem;
  border-radius: 10px;
  border: none;
  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.color.accent};
  background-color: ${({ theme }) => theme.color.bgMain};
`;
