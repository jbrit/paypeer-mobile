import Flexbox from "@/components/Global/Flexbox/Flexbox.styles";
import { Checkmark } from "@/svg/checkmark";
import styled from "styled-components";
import { ITransactionSuccessfulProps } from "./TransactionSuccessful.types";

export const StyledTransactionSuccessfulContainer = styled.div<
  Pick<ITransactionSuccessfulProps, "isOpen">
>`
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  touch-action: none;
  background-color: #ffffff;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};
  pointer-events: ${({ isOpen }) => (isOpen ? "all" : "none")};
  transition: all 0.3s ease-in-out;
  padding: 0 24px;
`;

export const StyledTransactionSuccessfulBody = styled(Flexbox)`
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 181px;
  padding-top: 24vh;
  padding-bottom: 96px;
  height: 100%;
`;

export const StyledTransactionSuccessMessage = styled.div`
  max-width: 287px;
  text-align: center;
`;

export const StyledTransactionSuccessCircle = styled(Flexbox)`
  @keyframes circle {
    to {
      opacity: 100;
    }
  }
  width: 74px;
  height: 74px;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  background-color: #fcfcfc;
  border: 1px solid rgba(202, 204, 206, 0.47);
  margin-bottom: 16px;
  opacity: 0;
  border-radius: 50%;
  animation: circle 0.3s ease-in-out 0.3s forwards;
`;

export const StyledTransactionSuccessSVG = styled(Checkmark)`
  @keyframes checkmark {
    to {
      stroke-dashoffset: 0px;
    }
  }
  #checkmark {
    stroke-dasharray: 53;
    stroke-dashoffset: -53;
    animation: checkmark 0.6s ease forwards;
    animation-delay: 0.3s;
  }
`;
