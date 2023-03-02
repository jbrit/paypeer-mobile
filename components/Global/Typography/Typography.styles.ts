import { Gordita } from "@/styles/font";
import styled from "styled-components";
import { ITypographyProps } from "./Typography.types";
import { typographyVariant, typographyWeight } from "./Typography.utils";

export const Text = styled.p<ITypographyProps>`
  margin-bottom: ${({ mb }) => mb ?? 0};
  letter-spacing: ${({ letterSpacing }) => letterSpacing ?? "0.004em"};
  font-weight: ${({ weight }) => weight && typographyWeight(weight)};
  color: ${({ color }) => (color ? color : `#202223`)};
  font-size: ${({ variant }) => typographyVariant(variant).text[0]};
  line-height: ${({ variant }) => typographyVariant(variant).text[1]};
  text-decoration: ${({ isUnderline }) => isUnderline && "underline"};
  text-align: ${({ textAlign }) => textAlign};
  ${Gordita.style};
`;

export const Display = styled.p<ITypographyProps>`
  margin-bottom: ${({ mb }) => mb ?? 0};
  letter-spacing: ${({ letterSpacing }) => letterSpacing ?? "0.004em"};
  font-weight: ${({ weight }) => weight && typographyWeight(weight)};
  color: ${({ color }) => (color ? color : `#202223`)};
  font-size: ${({ variant }) => typographyVariant(variant).display[0]};
  line-height: ${({ variant }) => typographyVariant(variant).display[1]};
  text-decoration: ${({ isUnderline }) => isUnderline && "underline"};
  text-align: ${({ textAlign }) => textAlign};
  ${Gordita.style};
`;
