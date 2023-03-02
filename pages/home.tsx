import type { ReactElement } from "react";
import Home from "@/screens/Dashboard/Home/Home";
import { NextPageWithLayout } from "./_app";
import DashboardLayout from "@/layouts/DashboardLayout/DashboardLayout";

const HomePage: NextPageWithLayout = () => {
  return <Home />;
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default HomePage;
