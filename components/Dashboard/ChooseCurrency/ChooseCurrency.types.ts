import type { Currency } from "@/types/global";

export interface IChooseCurrencyProps {
  onCurrencyClick: (currency: Currency) => void;
}
