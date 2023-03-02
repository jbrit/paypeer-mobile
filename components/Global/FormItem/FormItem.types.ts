import { FormItemProps as AntFormItemProps } from "antd";
import CSSTypes from "csstype";

export type FormItemProps = AntFormItemProps & {
  mb?: CSSTypes.Property.MarginBottom;
};
