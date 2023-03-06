import { SelectProps as AntdSelectProps } from "antd";
import CSSTypes from "csstype";

export interface SelectOptions {
  items: { value: string; label: string | JSX.Element }[];
}

export interface IStyledSelectProps {
  height?: CSSTypes.Property.Height;
  mb?: CSSTypes.Property.MarginBottom;
}

export type SelectProps = AntdSelectProps & IStyledSelectProps & SelectOptions;
