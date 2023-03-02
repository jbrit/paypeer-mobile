import styled from "styled-components";
import { FlexboxProps } from "./Flexbox.types";

const Flexbox = styled.div<FlexboxProps>`
  display: flex;
  gap: ${({ flexGap }) => flexGap};
  align-items: ${({ alignItems }) => alignItems || "flex-start"};
  justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
  flex-wrap: ${({ wrap }) => wrap || "wrap"};
  flex-direction: ${({ flexDir }) => flexDir || "row"};
  margin: ${({ margin }) => margin};
  width: ${({ width }) => width};
`;

export default Flexbox;
