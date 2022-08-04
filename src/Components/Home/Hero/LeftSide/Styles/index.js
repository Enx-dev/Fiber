import styled from "styled-components";
import { Desktop } from "../../../../../utils/BreakPoints";
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
export const Rating = styled.div`
  display: none;
  ${Desktop("display: flex;gap: 1rem;align-items: center;")}
`;
export const RatingStars = styled.span`
  ${Desktop("display: flex;gap: 0.2rem;align-items: center;")}
`;
export const RatingStar = styled.img``;
export const RatingText = styled.span``;
export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.head};
  line-height: 1.3em;
  font-weight: 700;
`;
export const Text = styled.p`
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.fontSize.base};
  padding-inline-end: 0.5rem;
  line-height: 1.7em;
`;
export const Link = styled.a`
  align-self: center;
  position: relative;
  cursor: pointer;
  font-weight: 700;
  &:after {
    content: "";
    height: 3px;
    background: ${({ theme }) => theme.color.accent};
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;
export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  margin-top: 1rem;
  ${Desktop("flex-direction:row;align-items:center;gap:1rem;")}
`;
export const Mid = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  a {
    display: grid;
    align-self: strech;
  }
  ${Desktop("flex-direction:row;align-items:center;gap:1rem;")}
`;
export const Span = styled.span`
  display: flex;
  gap: 0.5rem;
  color: ${({ theme }) => theme.color.text};
`;
