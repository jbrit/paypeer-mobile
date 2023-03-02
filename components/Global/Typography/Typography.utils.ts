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
    default:
      return 400;
  }
};

export const typographyVariant = (
  variant: TypographyVariants
): TypographyValue => {
  switch (variant) {
    case "xs":
      return { text: ["1.2rem", "1.7rem"], display: ["2rem", "2.8rem"] };
    case "sm":
      return {
        text: ["1.4rem", "2rem"],
        display: ["1.875rem", "2.375rem"],
      };
  }
};
