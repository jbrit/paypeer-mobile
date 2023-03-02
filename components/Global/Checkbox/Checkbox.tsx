import { StyledCheckbox } from "./Checkbox.styles";
import { CheckboxProps } from "./Checkbox.types";

const Checkbox: React.FC<CheckboxProps> = (props) => {
  return <StyledCheckbox {...props} />;
};

export default Checkbox;
