import type { Currency, Recipient } from "@/types/global";

export interface IEnterAmountProps {
  recipient: Recipient | null;
  onEditClick: () => void;
  currency: Currency;
  amount: string;
  setAmount: React.Dispatch<React.SetStateAction<string>>;
  onNextClick: () => void;
}
