import Flexbox from "@/components/Global/Flexbox/Flexbox.styles";
import {
  Display,
  Text,
} from "@/components/Global/Typography/Typography.styles";
import { Back } from "@/svg/back";
import { IDashboardSecondaryLayoutProps } from "./DashboardSecondaryLayout.types";
import { useRouter } from "next/router";
import { StyledDashboardSecondaryLayout } from "./DashboardSecondaryLayout.styles";

const DashboardSecondaryLayout: React.FC<IDashboardSecondaryLayoutProps> = ({
  children,
  heading,
}) => {
  const router = useRouter();

  return (
    <StyledDashboardSecondaryLayout>
      <Flexbox
        margin="0 0 30px 0"
        justifyContent="space-between"
        alignItems="center"
      >
        <button onClick={() => router.back()}>
          <Back />
        </button>
        <Display weight="medium" variant="xs" letterSpacing="0.0015em">
          {heading}
        </Display>
        <div />
      </Flexbox>
      {children}
    </StyledDashboardSecondaryLayout>
  );
};

export default DashboardSecondaryLayout;
