import { StyledInput, StyledInputPassword } from "./Input.styles";
import { InputProps } from "./Input.types";

const Input: React.FC<InputProps> = ({ type, ...rest }) => {
  return type === "password" ? (
    <StyledInputPassword type={type} {...rest} />
  ) : (
    <StyledInput type={type} {...rest} />
  );
};

export default Input;
