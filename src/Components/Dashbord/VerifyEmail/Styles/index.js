import styled from "styled-components";
import { Desktop } from "../../../../utils/BreakPoints";
export const Wrapper = styled.aside`
  position: absolute;

  bottom: 0;
  right: 0;
  width: 100vw;
  ${Desktop("width:60vw;left:20vw;margin:auto;")}
  padding-block: 1.5rem;
  background-color: ${({ theme }) => theme.color.accent};
  padding-inline: 1rem;
`;
export const Text = styled.p`
  color: white;
  font-size: 1.5rem;
`;
export const VerifyBtn = styled.button`
  padding-block: 1rem;
  cursor: pointer;
  padding-inline: 2rem;
  border-radius: 10px;
  border: none;
  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.color.accent};
  background-color: ${({ theme }) => theme.color.bgMain};
`;
