import Flexbox from "@/components/Global/Flexbox/Flexbox.styles";
import styled from "styled-components";

export const StyledTransactionwWrapper = styled.li`
  width: 100%;
  list-style: none;
  display: flex;
  align-self: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 14px;
  padding: 14px 0;
  &:not(:last-child) {
    border-bottom: 0.6px solid rgba(202, 204, 206, 0.68);
  }
  .random {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #f4f5f5;
  }
`;

export const StyledTransactionLeft = styled.div`
  flex-grow: 2;
  display: flex;
  gap: 14px;
  align-items: center;
`;

export const StyledTransactionRight = styled.div`
  flex-grow: 1;
  text-align: right;
  align-self: center;
`;
