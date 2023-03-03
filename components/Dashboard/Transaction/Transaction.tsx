import Flexbox from "@/components/Global/Flexbox/Flexbox.styles";
import { Text } from "@/components/Global/Typography/Typography.styles";
import { CircledArrowInward, CircledArrowOutward } from "@/svg/circled-arrow";
import {
  StyledTransactionLeft,
  StyledTransactionRight,
  StyledTransactionwWrapper,
} from "./Transaction.styles";
import { ITransactionProps } from "./Transaction.types";

const Transaction: React.FC<ITransactionProps> = ({
  price,
  status,
  walletAddress,
  name,
}) => {
  return (
    <StyledTransactionwWrapper>
      <StyledTransactionLeft>
        {status === "received" ? (
          <CircledArrowInward />
        ) : (
          <CircledArrowOutward />
        )}
        <Flexbox flexDir="column" flexGap="2px">
          <Text variant="xs" weight="medium" letterSpacing="0.004em">
            {name}
          </Text>
          <Text
            variant="xxs"
            weight="regular"
            letterSpacing="0.004em"
            color="rgba(32, 34, 35, 0.67)"
          >
            {status === "received" ? "From " : "To "}
            {walletAddress}
          </Text>
        </Flexbox>
      </StyledTransactionLeft>
      <StyledTransactionRight>
        <Text variant="xs" weight="medium" letterSpacing="0.0025em">
          {status === "received" ? `+${price}` : `-${price}`}
        </Text>
      </StyledTransactionRight>
    </StyledTransactionwWrapper>
  );
};

export default Transaction;
