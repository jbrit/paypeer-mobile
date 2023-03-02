import CSSTypes from "csstype";

export type TypographyVariants = "xs" | "sm";

export type FontWeight = "regular" | "medium" | "bold";

export type ITypographyProps = {
  variant: TypographyVariants;
  mb?: CSSTypes.Property.MarginBottom;
  isUnderline?: boolean;
  textAlign?: CSSTypes.Property.TextAlign;
  color?: CSSTypes.Property.Color;
  weight?: FontWeight;
  letterSpacing?: CSSTypes.Property.LetterSpacing;
};

export interface TypographyValue {
  text: string[];
  display: string[];
}