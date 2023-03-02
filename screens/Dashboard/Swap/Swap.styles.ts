import Flexbox from "@/components/Global/Flexbox/Flexbox.styles";
import type { Direction } from "@/types/global";
import styled from "styled-components";

export const SwapInputContainer = styled(Flexbox)`
  position: relative;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 32px;
`;

export const SwapButton = styled.button<{ direction: Direction }>`
  position: absolute;
  width: 35px;
  height: 35px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  svg {
    transition: transform 0.3s ease-in-out;
    transform: ${({ direction }) =>
      `rotate(${direction === "up" ? "0deg" : "180deg"})`};
  }
`;
