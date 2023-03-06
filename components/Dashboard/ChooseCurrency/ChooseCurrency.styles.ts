import Flexbox from "@/components/Global/Flexbox/Flexbox.styles";
import styled from "styled-components";

export const StyledCurrencyList = styled(Flexbox)`
  width: 100%;
  flex-direction: column;
  gap: 14px;
`;

export const StyledCurrencyListItem = styled.li`
  list-style: none;
  width: 100%;
  border-bottom: 0.6px solid rgba(202, 204, 206, 0.68);
  padding-bottom: 14px;
  &:last-child {
    border-bottom: 0;
  }
`;

export const StyledCurrencyListItemButton = styled(Flexbox)`
  align-items: flex-start;
  width: 100%;
  gap: 14px;
`;

export const StyledCurrencyListItemDetails = styled.div`
  flex-grow: 1;
  text-align: left;
`;
