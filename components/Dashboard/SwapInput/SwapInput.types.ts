import type { Currency, Status } from "@/types/global";

export interface ISwapInputProps {
  state: {
    send: string;
    receive: string;
  };
  setState: React.Dispatch<
    React.SetStateAction<{
      send: string;
      receive: string;
    }>
  >;
  balance?: string;
  currency: Currency | null;
  status: Status;
  onMaxClick?: () => void;
}
