import { Gordita } from "@/styles/font";
import styled from "styled-components";

export const StyledOtpInput = styled.input`
  width: 40px;
  height: 44px;
  background: #fafafa;
  border: 1px solid rgba(160, 163, 166, 0.6);
  text-align: center;
  font: inherit;
  font-size: 1.4rem;
  line-height: 2rem;
  font-weight: 400;
  ${Gordita.style}
  color: inherit;
  outline: none;
  &:focus {
    border-color: #262626;
  }
`;
