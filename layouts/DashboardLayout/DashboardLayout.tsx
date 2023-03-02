import { HomeActive, HomeInActive } from "@/svg/home";
import {
  StyledDashboardLayout,
  StyledDashboardNavigation,
  StyledDashboardNavigationLink,
} from "./DashboardLayout.styles";
import { useRouter } from "next/router";
import { TransactionActive, TransactionInActive } from "@/svg/transaction";
import { SettingsActive, SettingsInActive } from "@/svg/settings";
import { IDashboardLayoutProps } from "./DashboardLayout.types";

const DashboardLayout: React.FC<IDashboardLayoutProps> = ({ children }) => {
  const router = useRouter();

  return (
    <StyledDashboardLayout>
      {children}
      <StyledDashboardNavigation>
        {[
          {
            name: "Home",
            link: "/home",
            icon: [<HomeActive key={0} />, <HomeInActive key={1} />],
          },
          {
            name: "Transactions",
            link: "/transactions",
            icon: [
              <TransactionActive key={0} />,
              <TransactionInActive key={1} />,
            ],
          },
          {
            name: "Settings",
            link: "/settings",
            icon: [<SettingsActive key={0} />, <SettingsInActive key={1} />],
          },
        ].map(({ icon, link, name }) => (
          <StyledDashboardNavigationLink
            href={link}
            isActive={router.route.includes(link)}
            key={name}
          >
            {router.route.includes(link) ? icon[0] : icon[1]}
            <span>{name}</span>
          </StyledDashboardNavigationLink>
        ))}
      </StyledDashboardNavigation>
    </StyledDashboardLayout>
  );
};

export default DashboardLayout;
