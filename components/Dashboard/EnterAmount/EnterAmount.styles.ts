import Flexbox from "@/components/Global/Flexbox/Flexbox.styles";
import { Gordita } from "@/styles/font";
import styled from "styled-components";

export const StyledEnterAmountContainer = styled(Flexbox)`
  width: 100%;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  padding-bottom: 96px;
  flex-grow: 1;
`;

export const StyledRecipient = styled(Flexbox)`
  align-items: center;
  gap: 14px;
  margin-bottom: 102px;
  margin-bottom: 14vh;
`;

export const StyledRecipientDetails = styled(Flexbox)`
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
`;

export const StyledRecipientIcon = styled(Flexbox)`
  width: 30px;
  height: 30px;
  background-color: #f4f5f5;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

export const StyledAmountContainer = styled(Flexbox)`
  position: relative;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const StyledAmountInputContainer = styled(Flexbox)`
  width: 50%;
  max-width: 130px;
  position: relative;
  justify-content: center;
  padding: 0 15px;
  gap: 3px;
  border-bottom: 0.6px solid rgba(109, 113, 117, 0.87);
  flex-wrap: nowrap;
`;

export const StyledAmountInputSymbol = styled.p`
  font-weight: 500;
  font-size: 2.4rem;
  line-height: 30px;
  text-align: center;
  letter-spacing: 0.0015em;
  color: #6d7175;
  ${Gordita.style}
`;

export const StyledAmountInput = styled.input`
  font: inherit;
  font-size: 2.4rem;
  line-height: 3rem;
  font-weight: 500;
  ${Gordita.style}
  background: transparent;
  letter-spacing: 0.0015em;
  color: rgba(32, 34, 35, 0.87);
  letter-spacing: 0.0015em;
  outline: none;
  width: 100%;
  border: none;
  text-align: center;
  padding-bottom: 5px;
  &::placeholder {
    color: #6d7175;
  }
`;

export const StyledMaxButton = styled.button`
  background-color: #f0f0f0;
  border-radius: 4px;
  padding: 5px 6px 3px 6px;
  ${Gordita.style}
  font-weight: 500;
  font-size: 1rem;
  line-height: 1rem;
  color: #202223;
  position: absolute;
  right: 32px;
  top: 50%;
  transform: translateY(-50%);
`;
