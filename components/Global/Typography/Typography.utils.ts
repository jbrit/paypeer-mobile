import {
  FontWeight,
  TypographyValue,
  TypographyVariants,
} from "./Typography.types";

export const typographyWeight = (weight: FontWeight) => {
  switch (weight) {
    case (weight = "bold"):
      return 700;
    case (weight = "medium"):
      return 500;
    case (weight = "regular"):
      return 400;
    case (weight = "light"):
      return 300;
    default:
      return 400;
  }
};

export const typographyVariant = (
  variant: TypographyVariants
): TypographyValue => {
  switch (variant) {
    case "xxs":
      return { text: ["1rem", "1.4rem"], display: ["1.8rem", "1.8rem"] };
    case "xs":
      return { text: ["1.2rem", "1.7rem"], display: ["2rem", "2.8rem"] };
    case "sm":
      return {
        text: ["1.4rem", "2rem"],
        display: ["2.4rem", "3.4rem"],
      };
    case "md":
      return {
        text: ["1.6rem", "2.3rem"],
        display: ["2.4rem", "3.4rem"],
      };
  }
};
