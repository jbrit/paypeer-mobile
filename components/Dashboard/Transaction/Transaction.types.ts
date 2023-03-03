import type { Status } from "@/types/global";

export interface ITransactionProps {
  price: string;
  status: Status;
  walletAddress: string;
  name: string;
}
