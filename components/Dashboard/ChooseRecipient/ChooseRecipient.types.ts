import type { Recipient } from "@/types/global";

export interface IChooseRecipientProps {
  onRecentRecipientClick: (value: Recipient) => void;
  onNextClick: () => void;
}
