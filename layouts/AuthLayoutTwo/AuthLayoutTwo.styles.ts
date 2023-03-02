import styled from "styled-components";
import { IStyledAuthLayoutTwoProps } from "./AuthLayoutTwo.types";

export const StyledAuthLayoutTwoWrapper = styled.div`
  margin-top: 6vh;
`;

export const StyledAuthLayoutTwoOuter = styled.div`
  width: calc(100vw - 48px);
  overflow: hidden;
`;

export const StyledAuthLayoutTwoInner = styled.div<
  Pick<IStyledAuthLayoutTwoProps, "length" | "current">
>`
  width: ${({ length }) => `calc(${length * 100}vw - 48px)`};
  min-height: 100vh;
  display: flex;
  transform: ${({ current }) =>
    `translateX(-${current * 100}vw) translateX(${48 * current}px)`};
  transition: transform 0.3s ease-in-out;
`;

export const StyledAuthLayoutTwoInnerWrapper = styled.div`
  width: calc(100vw - 48px);
  overflow: hidden;
`;

export const StyledBackButton = styled.button`
  transition: transform 0.3s ease-in-out;
  margin-bottom: 32px;
  &:hover {
    svg {
      transform: translateX(5px);
    }
  }
`;
