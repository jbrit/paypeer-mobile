export type Currency = "naira" | "usd";

export type Status = "sent" | "received";

export type Direction = "up" | "down";

export type Swap<T> = {
  send: T;
  receive: T;
};

export type Recipient = {
  type: "address" | "username";
  value: string;
};
