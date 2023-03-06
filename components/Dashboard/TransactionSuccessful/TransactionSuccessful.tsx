import Button from "@/components/Global/Button/Button";
import {
  StyledTransactionSuccessCircle,
  StyledTransactionSuccessfulBody,
  StyledTransactionSuccessfulContainer,
  StyledTransactionSuccessMessage,
  StyledTransactionSuccessSVG,
} from "./TransactionSuccessful.styles";
import { ITransactionSuccessfulProps } from "./TransactionSuccessful.types";
import { useRouter } from "next/router";
import { Text } from "@/components/Global/Typography/Typography.styles";

const TransactionSuccessful: React.FC<ITransactionSuccessfulProps> = ({
  isOpen,
}) => {
  const router = useRouter();

  return (
    <StyledTransactionSuccessfulContainer isOpen={isOpen}>
      <StyledTransactionSuccessfulBody>
        <div>
          {isOpen ? (
            <StyledTransactionSuccessCircle>
              <StyledTransactionSuccessSVG />
            </StyledTransactionSuccessCircle>
          ) : null}
          <StyledTransactionSuccessMessage>
            <Text variant="md" letterSpacing="0.004em" weight="medium">
              Transaction Successful!
            </Text>
            <Text
              textAlign="center"
              variant="xs"
              letterSpacing="0.004em"
              weight="light"
            >
              We have completed your transaction. You can view the details from
              your{" "}
              <Text
                variant="xs"
                letterSpacing="0.004em"
                weight="medium"
                as="button"
                onClick={() => router.push("/home")}
              >
                history
              </Text>
            </Text>
          </StyledTransactionSuccessMessage>
        </div>
        <Button onClick={() => router.push("/home")} buttonType="primary">
          Dashboard
        </Button>
      </StyledTransactionSuccessfulBody>
    </StyledTransactionSuccessfulContainer>
  );
};

export default TransactionSuccessful;
