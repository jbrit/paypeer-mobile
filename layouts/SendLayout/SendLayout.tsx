import Flexbox from "@/components/Global/Flexbox/Flexbox.styles";
import { Display } from "@/components/Global/Typography/Typography.styles";
import { Back } from "@/svg/back";
import { ISendLayoutProps } from "./SendLayout.types";
import {
  StyledSendLayout,
  StyledSendLayoutContentInner,
  StyledSendLayoutContentInnerWrapper,
  StyledSendLayoutContentOuter,
  StyledSendLayoutHeadingInner,
  StyledSendLayoutHeadingOuter,
} from "./SendLayout.styles";

const SendLayout: React.FC<ISendLayoutProps> = ({
  children,
  current,
  onBackClick,
}) => {
  return (
    <StyledSendLayout>
      <Flexbox
        margin="0 0 30px 0"
        justifyContent="space-between"
        alignItems="center"
      >
        <button onClick={onBackClick}>
          <Back />
        </button>
        <StyledSendLayoutHeadingOuter>
          <StyledSendLayoutHeadingInner
            current={current}
            length={children.length}
          >
            {children.map(({ heading }, index) => (
              <Display
                as="h1"
                className="send-heading"
                key={index}
                weight="medium"
                variant="xs"
                letterSpacing="0.0015em"
              >
                {heading}
              </Display>
            ))}
          </StyledSendLayoutHeadingInner>
        </StyledSendLayoutHeadingOuter>
        <div />
      </Flexbox>
      <StyledSendLayoutContentOuter>
        <StyledSendLayoutContentInner
          current={current}
          length={children.length}
        >
          {children.map(({ component }, index) => (
            <StyledSendLayoutContentInnerWrapper key={index}>
              {component}
            </StyledSendLayoutContentInnerWrapper>
          ))}
        </StyledSendLayoutContentInner>
      </StyledSendLayoutContentOuter>
    </StyledSendLayout>
  );
};

export default SendLayout;
