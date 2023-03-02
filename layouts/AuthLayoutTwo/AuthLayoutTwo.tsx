import {
  Display,
  Text,
} from "@/components/Global/Typography/Typography.styles";
import { Back } from "@/svg/back";
import {
  StyledAuthLayoutTwoInner,
  StyledAuthLayoutTwoInnerWrapper,
  StyledAuthLayoutTwoOuter,
  StyledAuthLayoutTwoWrapper,
  StyledBackButton,
} from "./AuthLayoutTwo.styles";
import { IAuthLayoutTwoProps } from "./AuthLayoutTwo.types";

const AuthLayoutTwo: React.FC<IAuthLayoutTwoProps> = ({
  children,
  current,
  onBackClick,
}) => {
  return (
    <StyledAuthLayoutTwoWrapper>
      <StyledBackButton onClick={onBackClick}>
        <Back />
      </StyledBackButton>
      <StyledAuthLayoutTwoOuter>
        <StyledAuthLayoutTwoInner current={current} length={children.length}>
          {children.map(({ component, heading, tagline }, index) => (
            <StyledAuthLayoutTwoInnerWrapper key={index}>
              <Display
                letterSpacing="0.0015em"
                variant="xs"
                weight="medium"
                mb="4px"
              >
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
              {component}
            </StyledAuthLayoutTwoInnerWrapper>
          ))}
        </StyledAuthLayoutTwoInner>
      </StyledAuthLayoutTwoOuter>
    </StyledAuthLayoutTwoWrapper>
  );
};

export default AuthLayoutTwo;
