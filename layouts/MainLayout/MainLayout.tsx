import { Gordita } from "@/styles/font";
import { StyledMainLayout } from "./MainLayout.styles";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <StyledMainLayout className={Gordita.className}>
      {children}
    </StyledMainLayout>
  );
};

export default MainLayout;
