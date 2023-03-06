import type { Currency, Status, Swap } from "@/types/global";

export interface ISwapInputProps {
  state: Swap<string>;
  setState: React.Dispatch<React.SetStateAction<Swap<string>>>;
  balance?: string;
  currency: Swap<Currency | null>;
  setCurrency: React.Dispatch<React.SetStateAction<Swap<Currency | null>>>;
  status: Status;
  onMaxClick?: () => void;
}
