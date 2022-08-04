import styled from "styled-components";
import { Desktop } from "../../../../utils/BreakPoints";
export const Wrapper = styled.div`
  ${Desktop("max-width:500px")}
`;
export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.subHead};
  line-height: 1.4em;
`;
export const SubTitle = styled.p`
  color: ${({ theme }) => theme.color.accent};
  margin-bottom: 1.5rem;
  font-weight: 700;
  font-size: 1.2rem;
`;
export const CardContainer = styled.div`
  ${Desktop("display:flex;gap:1rem;justify-content:space-between;")}
`;
export const CardWrapper = styled.div`
  margin-top: 2rem;
`;
export const CardTitle = styled.h1`
  margin-top: 1rem;
  font-size: 1rem;
`;
export const CardContent = styled.p`
  margin-top: 1rem;
  line-height: 1.7em;
  color: ${({ theme }) => theme.color.text};
`;
export const CardImage = styled.img``;
