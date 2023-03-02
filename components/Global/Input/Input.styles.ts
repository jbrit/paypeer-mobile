import { Gordita } from "@/styles/font";
import { Input as AntdInput } from "antd";
import styled from "styled-components";
import { InputProps } from "./Input.types";

export const StyledInput = styled(AntdInput)<InputProps>`
  height: ${({ height }) => height ?? "44px"};
  width: 100%;
  background-color: #fafafa;
  padding: 12px 16px;
  font-size: 1.4rem;
  line-height: 2rem;
  letter-spacing: 0.0025em;
  margin-bottom: ${({ mb }) => mb};
  border-radius: ${({ borderRadius }) => borderRadius ?? "0px"};
  & input {
    background-color: #fafafa;
    border: 1px solid rgba(160, 163, 166, 0.6);
    font-weight: 400;
    border-radius: 8px;
    color: rgba(32, 34, 35, 0.87);
    ${Gordita.style};
    &::placeholder {
      color: rgba(18, 18, 18, 0.47);
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 2rem;
    }
  }
  & .ant-input-prefix {
    margin-right: 10px;
  }
  &:not(.ant-input-affix-wrapper-disabled):hover {
    border-color: rgba(32, 34, 35, 0.87);
  }
  &:focus,
  &.ant-input-affix-wrapper-focused {
    border-color: rgba(32, 34, 35, 0.87);
    box-shadow: none;
  }
`;

export const StyledInputPassword = styled(AntdInput.Password)<InputProps>`
  height: ${({ height }) => height ?? "44px"};
  width: 100%;
  background-color: #fafafa;
  padding: 12px 16px;
  font-size: 1.4rem;
  line-height: 2rem;
  letter-spacing: 0.0025em;
  margin-bottom: ${({ mb }) => mb};
  border-radius: ${({ borderRadius }) => borderRadius ?? "0px"};
  & input {
    background-color: #fafafa;
    border: 1px solid rgba(160, 163, 166, 0.6);
    font-weight: 400;
    border-radius: 8px;
    color: rgba(32, 34, 35, 0.87);
    ${Gordita.style};
    &::placeholder {
      color: rgba(18, 18, 18, 0.47);
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 2rem;
    }
  }
  & .ant-input-prefix {
    margin-right: 10px;
  }
  &:not(.ant-input-affix-wrapper-disabled):hover {
    border-color: rgba(32, 34, 35, 0.87);
  }
  &:focus,
  &.ant-input-affix-wrapper-focused {
    border-color: rgba(32, 34, 35, 0.87);
    box-shadow: none;
  }
`;
