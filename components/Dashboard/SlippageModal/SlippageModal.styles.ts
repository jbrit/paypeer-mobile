import FormItem from "@/components/Global/FormItem/FormItem";
import Input from "@/components/Global/Input/Input";
import { Gordita } from "@/styles/font";
import styled from "styled-components";
import { ISlippageModalProps } from "./SlippageModal.types";

export const StyledSlippageModalContainer = styled.div<
  Pick<ISlippageModalProps, "isOpen">
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
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  pointer-events: ${({ isOpen }) => (isOpen ? "all" : "none")};
  transition: opacity 0.3s ease-in-out;
`;

export const StyledSlippageModalOverlay = styled.div<
  Pick<ISlippageModalProps, "isOpen">
>`
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

export const StyledSlippageModal = styled.div<
  Pick<ISlippageModalProps, "isOpen">
>`
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

export const StyledSlippageValue = styled.button<{ isSelected: boolean }>`
  height: 30px;
  padding: 8px;
  background-color: ${({ isSelected }) => (isSelected ? "#F0F0F0" : "#ffffff")};
  border: ${({ isSelected }) =>
    isSelected ? "1px solid #7B8084" : "0.6px solid rgba(160, 163, 166, 0.4)"};
  border-radius: 2px;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.4rem;
  letter-spacing: 0.0025em;
  color: rgba(18, 18, 18, 0.47);
  transition: all 0.3s ease-in-out;
  ${Gordita.style}
`;

export const StyledSlippageValueFormItem = styled(FormItem)`
  max-width: 147px;
`;

export const StyledSlippageValueInput = styled(Input)`
  width: 100%;
  background-color: #ffffff;
  border: 0.6px solid rgba(160, 163, 166, 0.4);
  padding: 8px 14px;
`;
