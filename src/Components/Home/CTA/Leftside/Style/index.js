import styled from "styled-components";
import { Desktop } from "../../../../../utils/BreakPoints";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  a {
    display: grid;
    align-self: strech;
  }
  ${Desktop("width:100%;")}
`;
export const Title = styled.h1`
  color: white;
  font-size: ${({ theme }) => theme.fontSize.head};
  line-height: 1.3em;
  margin-bottom: 1rem;
`;
export const Text = styled.p`
  color: #ffffffa8;
  margin-bottom: 1rem;
`;
