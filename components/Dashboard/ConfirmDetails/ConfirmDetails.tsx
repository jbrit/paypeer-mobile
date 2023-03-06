import Button from "@/components/Global/Button/Button";
import Flexbox from "@/components/Global/Flexbox/Flexbox.styles";
import { Text } from "@/components/Global/Typography/Typography.styles";
import { CircledNaira, CircledUSD } from "@/svg/currency";
import { Info } from "@/svg/info";
import {
  StyledConfirmDetailsBody,
  StyledConfirmDetailsHeader,
  StyledConfirmDetailstContainer,
} from "./ConfirmDetails.styles";
import { IConfirmDetailsProps } from "./ConfirmDetails.types";

const ConfirmDetails: React.FC<IConfirmDetailsProps> = ({
  currency,
  onSendClick,
  recipient,
  amount,
}) => {
  return (
    <StyledConfirmDetailstContainer>
      <div>
        <StyledConfirmDetailsHeader>
          {currency === "naira" ? <CircledNaira /> : <CircledUSD />}
          <Text variant="md" letterSpacing="0.004em" weight="medium">
            {`Sending ${currency === "naira" ? "Naira" : "USD"}`}
          </Text>
        </StyledConfirmDetailsHeader>
        <StyledConfirmDetailsBody>
          {[
            { title: "From", value: "0x7a8...3Afc9Z" },
            { title: "Send To", value: recipient?.value },
            {
              title: "Amount",
              value: `${currency === "naira" ? "₦" : "$"}${amount}`,
            },
            {
              title: "Network Fee",
              value: `${currency === "naira" ? "₦" : "$"}0.22`,
            },
          ].map(({ title, value }) => (
            <Flexbox
              alignItems="center"
              justifyContent="space-between"
              width="100%"
              key={title}
            >
              <Flexbox flexGap="4px" alignItems="center">
                <Text
                  variant="xs"
                  letterSpacing="0.004em"
                  color="rgba(32, 34, 35, 0.87)"
                >
                  {title}
                </Text>
                {title.toLowerCase().includes("network") ? <Info /> : null}
              </Flexbox>
              <Text weight="medium" variant="xs" letterSpacing="0.004em">
                {value}
              </Text>
            </Flexbox>
          ))}
        </StyledConfirmDetailsBody>
      </div>
      <Button onClick={onSendClick} buttonType="primary">
        Send
      </Button>
    </StyledConfirmDetailstContainer>
  );
};

export default ConfirmDetails;
