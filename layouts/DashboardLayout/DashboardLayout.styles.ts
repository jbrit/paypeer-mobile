import styled from "styled-components";
import Link from "next/link";
import { IStyledDashboardLayout } from "./DashboardLayout.types";
import { Gordita } from "@/styles/font";

export const StyledDashboardLayout = styled.div`
  margin-top: 6vh;
  margin-bottom: 64px;
`;

export const StyledDashboardNavigation = styled.nav`
  position: fixed;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 47px;
  background-color: #fcfcfc;
  border-top: 0.6px solid rgba(202, 204, 206, 0.68);
  bottom: 0;
  left: 0;
  width: 100%;
`;

export const StyledDashboardNavigationLink = styled(Link)<
  Pick<IStyledDashboardLayout, "isActive">
>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  ${Gordita.style}
  font-weight: 400;
  font-size: 0.8rem;
  line-height: 1.1rem;
  letter-spacing: 0.004em;
  color: ${({ isActive }) => (isActive ? "#262626" : "rgba(32, 34, 35, 0.4)")};
  transition: 0.3s ease-in-out;
  &:hover,
  &:focus {
    color: #262626;
  }
  svg {
    height: 24px;
    width: 24px;
  }
`;
