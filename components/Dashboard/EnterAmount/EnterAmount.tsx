import React from "react";
import Button from "@/components/Global/Button/Button";
import Flexbox from "@/components/Global/Flexbox/Flexbox.styles";
import { Text } from "@/components/Global/Typography/Typography.styles";
import { AtSign } from "@/svg/atsign";
import { Edit } from "@/svg/edit";
import { Wallet } from "@/svg/wallet";
import {
  StyledAmountContainer,
  StyledAmountInput,
  StyledAmountInputContainer,
  StyledAmountInputSymbol,
  StyledEnterAmountContainer,
  StyledMaxButton,
  StyledRecipient,
  StyledRecipientDetails,
  StyledRecipientIcon,
} from "./EnterAmount.styles";
import { IEnterAmountProps } from "./EnterAmount.types";

const EnterAmount: React.FC<IEnterAmountProps> = ({
  currency,
  onEditClick,
  recipient,
  amount,
  setAmount,
  onNextClick,
}) => {
  return (
    <StyledEnterAmountContainer>
      <div>
        <StyledRecipient>
          <StyledRecipientIcon>
            {recipient?.type === "address" ? (
              <Wallet />
            ) : recipient?.type === "username" ? (
              <AtSign />
            ) : null}
          </StyledRecipientIcon>
          <StyledRecipientDetails>
            <Flexbox flexDir="column" flexGap="2px">
              <Text
                variant="xxs"
                letterSpacing="0.004em"
                color="rgba(32, 34, 35, 0.67)"
              >
                Send To:
              </Text>
              <Text variant="xs" weight="medium" letterSpacing="0.004em">
                {recipient?.value}
              </Text>
            </Flexbox>
            <button onClick={onEditClick}>
              <Edit />
            </button>
          </StyledRecipientDetails>
        </StyledRecipient>
        <Flexbox flexDir="column" flexGap="14px" alignItems="center">
          <StyledAmountContainer>
            <StyledAmountInputContainer>
              <StyledAmountInputSymbol>
                {currency === "naira" ? "₦" : "$"}
              </StyledAmountInputSymbol>
              <StyledAmountInput
                value={amount}
                onChange={(e) => {
                  if (!isNaN(Number(e.target.value))) {
                    setAmount(e.target.value);
                  }
                }}
                placeholder="0.00"
              />
            </StyledAmountInputContainer>
            <StyledMaxButton onClick={() => setAmount("1032.00")}>
              Max
            </StyledMaxButton>
          </StyledAmountContainer>
          <Text
            textAlign="center"
            variant="xxs"
            letterSpacing="0.004em"
            color="rgba(32, 34, 35, 0.67)"
          >
            {`Your balance: ${
              currency === "naira" ? "₦" : "$"
            }1032.00 (available)`}
          </Text>
        </Flexbox>
      </div>
      <Button onClick={onNextClick} disabled={!amount} buttonType="primary">
        Preview
      </Button>
    </StyledEnterAmountContainer>
  );
};

export default EnterAmount;
