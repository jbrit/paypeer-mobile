import Flexbox from "@/components/Global/Flexbox/Flexbox.styles";
import styled from "styled-components";

export const StyledChooseRecipientContainer = styled(Flexbox)`
  width: 100%;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  padding-bottom: 96px;
  flex-grow: 1;
`;

export const StyledRecentList = styled(Flexbox)`
  width: 100%;
  flex-direction: column;
  gap: 14px;
`;

export const StyledRecentListItem = styled.li`
  list-style: none;
  width: 100%;
`;

export const StyledRecentListItemButton = styled(Flexbox)`
  align-items: flex-start;
  width: 100%;
  gap: 14px;
`;

export const StyledRecentListItemDetails = styled.div`
  flex-grow: 1;
  text-align: left;
`;

export const StyledRecentListItemIcon = styled(Flexbox)`
  width: 30px;
  height: 30px;
  background-color: #f4f5f5;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;
