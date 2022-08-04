import styled from "styled-components";
import { Desktop } from "../../../../utils/BreakPoints";
export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  ${Desktop("flex-wrap:nowrap;")}
`;
export const Card = styled.div`
  padding: 2rem;
  border: 1px solid ${({ theme }) => theme.color.text};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
export const CardTop = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
export const CardContent = styled.p`
  color: ${({ theme }) => theme.color.text};
`;
export const CardBtn = styled.button`
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.color.text};
  background-color: transparent;
  color: ${({ theme }) => theme.color.accent};
  font-weight: 700;
  font-size: 1.1rem;
  border-radius: 0px;
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.65, 0.05, 0.36, 1);
  &:hover {
    background-color: ${({ theme }) => theme.color.accent};
    color: white;
    border-radius: 3000px;
    border: none;
  }
`;
export const CardName = styled.p`
  color: ${({ theme }) => theme.color.accent};
  font-weight: 700;
`;
export const CardImg = styled.img``;
export const CardRev = styled.p``;
export const CardInfo = styled.span``;
