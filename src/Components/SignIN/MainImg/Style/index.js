import styled from "styled-components";
import { Desktop } from "../../../../utils/BreakPoints";

export const Wrapper = styled.div`
  display: none;
  width: 100%;
  ${Desktop("display:grid;place-content:center;")}
  justify-items: center;
  text-align: center;
  background-color: ${({ theme }) => theme.color.accent};
  color: ${({ theme }) => theme.color.bgMain};
`;
export const Title = styled.h1`
  margin-bottom: 1rem;
`;
export const Text = styled.p`
  max-width: 500px;
  opacity: 0.7;
`;
export const ImgHolder = styled.div`
  width: 500px;
  heightL500px;
  margin-bottom:1rem;

`;
export const Img = styled.img`
  max-width: 100%;
`;
