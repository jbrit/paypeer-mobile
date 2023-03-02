import styled from "styled-components";
import { Checkbox as AntCheckbox } from "antd";

export const StyledCheckbox = styled(AntCheckbox)`
  & + & {
    margin-left: 0px;
  }
  &
    .ant-checkbox-wrapper:not(.ant-checkbox-wrapper-disabled):hover
    .ant-checkbox-inner,
  & .ant-checkbox:not(.ant-checkbox-disabled):hover .ant-checkbox-inner,
  & .ant-checkbox .ant-checkbox-inner {
    border-radius: 0;
    border-color: #262626;
  }
  &.ant-checkbox-wrapper:not(.ant-checkbox-wrapper-disabled):hover
    .ant-checkbox-checked:not(.ant-checkbox-disabled)
    .ant-checkbox-inner {
    background-color: #262626;
    border-color: #262626;
  }
  &.ant-checkbox-wrapper:not(.ant-checkbox-wrapper-disabled):hover
    .ant-checkbox-checked:not(.ant-checkbox-disabled):after {
    border-color: #262626;
  }
`;
