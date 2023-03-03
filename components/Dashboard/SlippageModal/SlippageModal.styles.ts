import FormItem from "@/components/Global/FormItem/FormItem";
import Input from "@/components/Global/Input/Input";
import { Gordita } from "@/styles/font";
import styled from "styled-components";

export const StyledSlippageValue = styled.button<{ isSelected: boolean }>`
  height: 30px;
  padding: 8px;
  background-color: ${({ isSelected }) => (isSelected ? "#F0F0F0" : "#ffffff")};
  border: ${({ isSelected }) =>
    isSelected ? "1px solid #7B8084" : "0.6px solid rgba(160, 163, 166, 0.4)"};
  border-radius: 2px;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.4rem;
  letter-spacing: 0.0025em;
  color: rgba(18, 18, 18, 0.47);
  transition: all 0.3s ease-in-out;
  ${Gordita.style}
`;

export const StyledSlippageValueFormItem = styled(FormItem)`
  max-width: 147px;
`;

export const StyledSlippageValueInput = styled(Input)`
  width: 100%;
  background-color: #ffffff;
  border: 0.6px solid rgba(160, 163, 166, 0.4);
  padding: 8px 14px;
`;
