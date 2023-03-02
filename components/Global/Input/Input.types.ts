import { InputProps as AntdInputProps } from "antd";
import CSSTypes from "csstype";

export type InputProps = AntdInputProps & {
  mb?: CSSTypes.Property.MarginBottom;
  height?: CSSTypes.Property.Height;
  borderRadius?: CSSTypes.Property.BorderRadius;
};
