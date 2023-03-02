import { Gordita } from "@/styles/font";
import styled from "styled-components";

export const StyledSwapInputContainer = styled.div`
  width: 100%;
  min-height: 90px;
  background-color: #fcfcfc;
  border: 1px solid rgba(202, 204, 206, 0.47);
  border-radius: 8px;
  padding: 15px 12px;
`;

export const StyledMaxAmountBtn = styled.button`
  border: 0.6px solid rgba(202, 204, 206, 0.87);
  border-radius: 4px;
  padding: 3px 6px;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.4rem;
  color: #6d7175;
`;

export const StyledSwapInput = styled.input`
  font: inherit;
  font-size: 2.2rem;
  line-height: 3.1rem;
  font-weight: 500;
  ${Gordita.style}
  background: transparent;
  letter-spacing: 0.0015em;
  color: #202223;
  outline: none;
  flex-grow: 1;
  border: none;
  max-width: 60%;
`;
