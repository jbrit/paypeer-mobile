import {
  Display,
  Text,
} from "@/components/Global/Typography/Typography.styles";
import { StyledAuthLayoutOneWrapper } from "./AuthLayoutOne.styles";
import { IAuthLayoutOneProps } from "./AuthLayoutOne.types";

const AuthLayoutOne: React.FC<IAuthLayoutOneProps> = ({
  heading,
  tagline,
  children,
}) => {
  return (
    <StyledAuthLayoutOneWrapper>
      <Display letterSpacing="0.0015em" variant="xs" weight="medium" mb="4px">
        {heading}
      </Display>
      <Text
        letterSpacing="0.0025em"
        color="#6D7175"
        variant="sm"
        weight="regular"
        mb="32px"
      >
        {tagline}
      </Text>
      {children}
    </StyledAuthLayoutOneWrapper>
  );
};

export default AuthLayoutOne;
