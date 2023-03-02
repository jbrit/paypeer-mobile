import Flexbox from "@/components/Global/Flexbox/Flexbox.styles";
import { Text } from "@/components/Global/Typography/Typography.styles";
import { ArrowInward, ArrowOutward } from "@/svg/arrow";
import {
  StyledMaxAmountBtn,
  StyledSwapInput,
  StyledSwapInputContainer,
} from "./SwapInput.styles";
import { ISwapInputProps } from "./SwapInput.types";

const SwapInput: React.FC<ISwapInputProps> = ({
  currency,
  setState,
  state,
  status,
  balance,
  onMaxClick,
}) => {
  return (
    <StyledSwapInputContainer>
      <Flexbox
        alignItems="center"
        justifyContent="space-between"
        margin="0 0 9px 0"
      >
        <Flexbox alignItems="center" flexGap="5px">
          {status === "received" ? <ArrowInward /> : <ArrowOutward />}
          <Text
            color="rgba(32, 34, 35, 0.87)"
            variant="xs"
            letterSpacing="0.004em"
          >
            {status === "received" ? "You Receive" : "You Pay"}
          </Text>
          {onMaxClick && (
            <StyledMaxAmountBtn onClick={onMaxClick}>MAX</StyledMaxAmountBtn>
          )}
        </Flexbox>
        {balance && (
          <Text
            color="rgba(32, 34, 35, 0.87)"
            variant="xxs"
            letterSpacing="0.004em"
          >
            Bal:{" "}
            <Text color="rgba(32, 34, 35, 0.67)" variant="xxs" as="span">
              {balance}
            </Text>
          </Text>
        )}
      </Flexbox>
      <Flexbox alignItems="center" justifyContent="space-between">
        <StyledSwapInput
          type="text"
          value={status === "received" ? state.receive : state.send}
          onChange={(e) => {
            if (!isNaN(Number(e.target.value))) {
              setState((prevState) => ({
                receive:
                  status === "received" ? e.target.value : prevState.receive,
                send: status === "sent" ? e.target.value : prevState.send,
              }));
            }
          }}
        />
        <Text
          color="rgba(32, 34, 35, 0.87)"
          variant="xs"
          letterSpacing="0.0025em"
        >
          Select a currency
        </Text>
      </Flexbox>
    </StyledSwapInputContainer>
  );
};

export default SwapInput;
