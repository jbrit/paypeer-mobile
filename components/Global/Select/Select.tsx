import React from "react";
import { ArrowDown } from "@/svg/arrow";
import { Select as AntdSelect } from "antd";
import {
  StyledArrowDown,
  StyledOption,
  StyledSelectGroup,
} from "./Select.styles";
import { SelectProps } from "./Select.types";

const Select: React.FC<SelectProps> = ({ items, height, ...rest }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <StyledSelectGroup height={height}>
      <AntdSelect
        onDropdownVisibleChange={(open) => setIsOpen(open)}
        suffixIcon={<StyledArrowDown isOpen={isOpen} />}
        {...rest}
      >
        {items.map(({ label, value }, index) => (
          <StyledOption value={value} key={index}>
            {label}
          </StyledOption>
        ))}
      </AntdSelect>
    </StyledSelectGroup>
  );
};

export default Select;
