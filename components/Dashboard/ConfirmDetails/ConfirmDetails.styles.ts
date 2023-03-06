import Flexbox from "@/components/Global/Flexbox/Flexbox.styles";
import styled from "styled-components";

export const StyledConfirmDetailstContainer = styled(Flexbox)`
  width: 100%;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  padding-bottom: 96px;
  flex-grow: 1;
`;

export const StyledConfirmDetailsHeader = styled(Flexbox)`
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 40px;
  svg {
    width: 40px;
    height: 40px;
  }
`;

export const StyledConfirmDetailsBody = styled(Flexbox)`
  width: 100%;
  padding: 16px 12px;
  flex-direction: column;
  gap: 18px;
  background-color: #fcfcfc;
  border: 1px solid rgba(202, 204, 206, 0.47);
  border-radius: 8px;
`;
