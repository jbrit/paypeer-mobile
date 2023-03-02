import { Gordita } from "@/styles/font";
import styled from "styled-components";

export const MainCTA = styled.button`
  min-width: 94px;
  height: 43px;
  background-color: #fcfdfd;
  border: 0.6px solid rgba(202, 204, 206, 0.47);
  border-radius: 5px;
  padding: 14px 15px;
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.2rem;
  ${Gordita.style}
  text-align: center;
  letter-spacing: 0.0025em;
  color: #202223;
  transition: 0.3s ease-in-out;
  &:hover,
  &:focus {
    color: rgba(32, 34, 35, 0.87);
  }
  svg {
    margin-right: 5px;
  }
`;
