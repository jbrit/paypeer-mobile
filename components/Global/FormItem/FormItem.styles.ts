import { Form } from "antd";
import styled from "styled-components";
import { FormItemProps } from "./FormItem.types";

export const StyledFormItem = styled(Form.Item)<FormItemProps>`
  margin-bottom: ${({ mb }) => mb ?? 0};
  width: 100%;
  & .ant-form-item-explain-error {
    font-size: 1.2rem;
    line-height: 1.7rem;
    margin-top: 4px;
    margin-bottom: 2px;
    letter-spacing: -0.02em;
  }
`;
