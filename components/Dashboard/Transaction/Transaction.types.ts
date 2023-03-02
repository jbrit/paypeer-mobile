export interface ITransactionProps {
  price: string;
  status: "sent" | "received";
  walletAddress: string;
}
