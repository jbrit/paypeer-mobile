import styled from "styled-components";
import { IModalProps } from "./Modal.types";

export const StyledModalContainer = styled.div<Pick<IModalProps, "isOpen">>`
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  touch-action: none;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  pointer-events: ${({ isOpen }) => (isOpen ? "all" : "none")};
  transition: opacity 0.3s ease-in-out;
`;

export const StyledModalOverlay = styled.div<Pick<IModalProps, "isOpen">>`
  position: absolute;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(1px);
  width: 100%;
  height: 100%;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transition: all 0.3s ease-in-out;
`;

export const StyledModal = styled.div<Pick<IModalProps, "isOpen">>`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  min-height: 243px;
  z-index: 9999;
  padding: 16px 25px;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transform: ${({ isOpen }) => (isOpen ? "translateY(0)" : "translateY(100%)")};
  backdrop-filter: blur(1px);
  transition: all 0.3s ease-in-out;
  background-color: #ffffff;
`;
