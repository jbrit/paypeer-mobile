import { PasswordHide, PasswordShow } from "@/svg/password";
import { StyledInput, StyledInputPassword } from "./Input.styles";
import { InputProps } from "./Input.types";

const Input: React.FC<InputProps> = ({ type, ...rest }) => {
  return type === "password" ? (
    <StyledInputPassword
      iconRender={(visible) => (visible ? <PasswordShow /> : <PasswordHide />)}
      type={type}
      {...rest}
    />
  ) : (
    <StyledInput type={type} {...rest} />
  );
};

export default Input;
