import { ArrowDown } from "@/svg/arrow";
import { Select } from "antd";
import styled from "styled-components";
import { IStyledSelectProps } from "./Select.types";

export const StyledSelectGroup = styled.div<IStyledSelectProps>`
  min-width: fit-content;
  .ant-select {
    min-width: fit-content;
    &:not(.ant-select-customize-input) {
      .ant-select-selector {
        height: ${({ height }) => height};
        border: none;
        background-color: transparent;
        border-radius: 0;
        min-width: fit-content;
        .ant-select-selection-search-input {
          height: fit-content;
        }
        .ant-select-selection-item,
        .ant-select-selection-placeholder {
          display: flex;
          align-items: center;
        }
      }
      &.ant-select-focused:not(.ant-select-disabled) .ant-select-selector {
        border-color: none;
        box-shadow: none;
      }
      &:hover .ant-select-selector {
        border: none;
      }
    }
    .ant-select-arrow {
      color: #666666;
    }
  }
  .ant-select-disabled {
    &.ant-select:not(.ant-select-customize-input) {
      .ant-select-selector {
        border-color: none;
      }
    }
  }
`;

export const StyledOption = styled(Select.Option)`
  background-color: #fcfdfd;
  border: 0.6px solid rgba(202, 204, 206, 0.47);
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  min-width: fit-content;
`;

export const StyledArrowDown = styled(ArrowDown)<{ isOpen: boolean }>`
  transform: ${({ isOpen }) => `rotate(${isOpen ? "180" : "0"}deg)`};
  transition: transform 0.3s ease-in-out;
`;
