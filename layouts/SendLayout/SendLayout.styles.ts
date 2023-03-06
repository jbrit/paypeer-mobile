import styled from "styled-components";
import { IStyledSendLayoutProps } from "./SendLayout.types";

export const StyledSendLayout = styled.div`
  margin-top: 6vh;
  height: 94vh;
  display: flex;
  flex-direction: column;
`;

export const StyledSendLayoutHeadingOuter = styled.div`
  height: 33px;
  overflow: hidden;
  .send-heading {
    height: 33px;
  }
`;

export const StyledSendLayoutHeadingInner = styled.div<
  Pick<IStyledSendLayoutProps, "length" | "current">
>`
  height: ${({ length }) => `${length * 33}px`};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  transform: ${({ current }) => `translateY(-${current * 33}px)`};
  transition: transform 0.3s ease-in-out;
`;

export const StyledSendLayoutContentOuter = styled.div`
  width: calc(100vw - 48px);
  overflow: hidden;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const StyledSendLayoutContentInner = styled.div<
  Pick<IStyledSendLayoutProps, "length" | "current">
>`
  width: ${({ length }) => `calc(${length * 100}vw - 48px)`};
  display: flex;
  transform: ${({ current }) =>
    `translateX(-${current * 100}vw) translateX(${48 * current}px)`};
  transition: transform 0.3s ease-in-out;
  flex-grow: 1;
`;

export const StyledSendLayoutContentInnerWrapper = styled.div`
  width: calc(100vw - 48px);
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;
