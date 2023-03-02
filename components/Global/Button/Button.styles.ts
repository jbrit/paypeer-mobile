import styled from "styled-components";
import { Button as AntdBtn } from "antd";
import { ButtonProps } from "./Button.types";
import { Gordita } from "@/styles/font";

export const StyledButton = styled(AntdBtn)<ButtonProps>`
  height: 46px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ buttonType }) =>
    buttonType === "primary" ? "#ffffff" : "rgba(32, 34, 35, 0.87)"};
  background-color: ${({ buttonType }) =>
    buttonType === "primary" ? "#262626" : "#F4F5F5"};
  border-color: ${({ buttonType }) =>
    buttonType === "primary" ? "#262626" : "#F4F5F5"};
  padding: 13px 10px;
  border-radius: 0px;
  font-size: 1.4rem;
  line-height: 2rem;
  font-weight: 500;
  margin-bottom: ${({ mb }) => mb};
  letter-spacing: 0.0025em;
  ${Gordita.style};
  cursor: pointer;
  &:hover,
  &:focus,
  &.ant-btn-default:not(:disabled):hover {
    color: ${({ buttonType }) =>
      buttonType === "primary" ? "#262626" : "#ffffff"};
    background-color: ${({ buttonType }) =>
      buttonType === "primary" ? "#ffffff" : "#262626"};
    border-color: ${({ buttonType }) =>
      buttonType === "primary" ? "#262626" : "#262626"};
  }
  &.ant-btn-default:disabled {
    color: ${({ buttonType }) =>
      buttonType === "primary" ? "#ffffff" : "rgba(32, 34, 35, 0.87)"};
    background-color: ${({ buttonType }) =>
      buttonType === "primary" ? "#262626" : "#F4F5F5"};
    border-color: ${({ buttonType }) =>
      buttonType === "primary" ? "#262626" : "#F4F5F5"};
    opacity: 0.47;
  }
  svg {
    margin-right: 10px;
  }
`;
