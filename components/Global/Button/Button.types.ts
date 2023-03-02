import { ButtonProps as AntdButtonProps } from "antd";
import CSSTypes from "csstype";

export type ButtonProps = AntdButtonProps & {
  mb?: CSSTypes.Property.MarginBottom;
  buttonType: "primary" | "secondary";
};
