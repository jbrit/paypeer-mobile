import { Text } from "@/components/Global/Typography/Typography.styles";
import { CircledNaira, CircledUSD } from "@/svg/currency";
import {
  StyledCurrencyList,
  StyledCurrencyListItem,
  StyledCurrencyListItemButton,
  StyledCurrencyListItemDetails,
} from "./ChooseCurrency.styles";
import { IChooseCurrencyProps } from "./ChooseCurrency.types";

const ChooseCurrency: React.FC<IChooseCurrencyProps> = ({
  onCurrencyClick,
}) => {
  return (
    <>
      <Text variant="sm" color="#6D7175" mb="28px">
        Which currency do you want to send?
      </Text>
      <StyledCurrencyList as="ul">
        {(["usd", "naira"] as const).map((item) => (
          <StyledCurrencyListItem key={item}>
            <StyledCurrencyListItemButton
              onClick={() => onCurrencyClick(item)}
              as="button"
            >
              {item === "naira" ? <CircledNaira /> : <CircledUSD />}
              <StyledCurrencyListItemDetails>
                <Text
                  weight="medium"
                  letterSpacing=" 0.004em"
                  variant="xs"
                  mb="2px"
                >
                  {item === "naira"
                    ? "Nigerian Naira (NGN)"
                    : "United States Dollars (USD)"}
                </Text>
                <Text
                  color="rgba(32, 34, 35, 0.87)"
                  variant="xxs"
                  letterSpacing=" 0.004em"
                >
                  Bal: {item === "naira" ? "₦" : "$"}1032.00
                </Text>
              </StyledCurrencyListItemDetails>
            </StyledCurrencyListItemButton>
          </StyledCurrencyListItem>
        ))}
      </StyledCurrencyList>
    </>
  );
};

export default ChooseCurrency;
