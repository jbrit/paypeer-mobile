import type { Currency, Recipient } from "@/types/global";

export interface IConfirmDetailsProps {
  recipient: Recipient | null;
  onSendClick: () => void;
  currency: Currency;
  amount: string;
}
