import CSSTypes from "csstype";

export type TypographyVariants = "xxs" | "xs" | "sm" | "md";

export type FontWeight = "light" | "regular" | "medium" | "bold";

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
