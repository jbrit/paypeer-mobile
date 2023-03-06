import React from "react";
import Flexbox from "@/components/Global/Flexbox/Flexbox.styles";
import { SelectOptions } from "@/components/Global/Select/Select.types";
import { Text } from "@/components/Global/Typography/Typography.styles";
import { ArrowInward, ArrowOutward } from "@/svg/arrow";
import { Naira, USD } from "@/svg/currency";
import {
  StyledMaxAmountBtn,
  StyledSwapInput,
  StyledSwapInputContainer,
} from "./SwapInput.styles";
import { ISwapInputProps } from "./SwapInput.types";
import Select from "@/components/Global/Select/Select";

const items: SelectOptions["items"] = [
  {
    label: (
      <Flexbox alignItems="center" flexGap="6px">
        <USD />
        <Text
          color="rgba(32, 34, 35, 0.87)"
          variant="xs"
          letterSpacing="0.0025em"
          weight="medium"
        >
          USD
        </Text>
      </Flexbox>
    ),
    value: "usd",
  },
  {
    label: (
      <Flexbox alignItems="center" flexGap="6px">
        <Naira />
        <Text
          color="rgba(32, 34, 35, 0.87)"
          variant="xs"
          letterSpacing="0.0025em"
          weight="medium"
        >
          NGN
        </Text>
      </Flexbox>
    ),
    value: "naira",
  },
];

const SwapInput: React.FC<ISwapInputProps> = ({
  setState,
  state,
  status,
  balance,
  onMaxClick,
  currency,
  setCurrency,
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
        <Select
          onChange={(value) =>
            setCurrency((prevCurrency) => ({
              receive: status === "received" ? value : prevCurrency.receive,
              send: status === "sent" ? value : prevCurrency.send,
            }))
          }
          value={status === "received" ? currency.receive : currency.send}
          items={items}
          defaultValue={
            <Text
              color="rgba(32, 34, 35, 0.87)"
              variant="xs"
              letterSpacing="0.0025em"
            >
              Select a currency
            </Text>
          }
        />
      </Flexbox>
    </StyledSwapInputContainer>
  );
};

export default SwapInput;
