import SendLayout from "@/layouts/SendLayout/SendLayout";
import React from "react";
import { useRouter } from "next/router";
import ChooseCurrency from "@/components/Dashboard/ChooseCurrency/ChooseCurrency";
import type { Currency, Recipient } from "@/types/global";
import ChooseRecipient from "@/components/Dashboard/ChooseRecipient/ChooseRecipient";
import EnterAmount from "@/components/Dashboard/EnterAmount/EnterAmount";
import ConfirmDetails from "@/components/Dashboard/ConfirmDetails/ConfirmDetails";
import TransactionSuccessful from "@/components/Dashboard/TransactionSuccessful/TransactionSuccessful";

const Send = () => {
  const router = useRouter();
  const [step, setStep] = React.useState(0);
  const [currency, setCurrency] = React.useState<Currency>("naira");
  const [recipient, setRecipient] = React.useState<Recipient | null>(null);
  const [amount, setAmount] = React.useState("");
  const [isSuccess, setIsSuccess] = React.useState(false);

  return (
    <>
      <TransactionSuccessful isOpen={isSuccess} />
      <SendLayout
        onBackClick={
          step === 0
            ? () => router.back()
            : () => setStep((prevStep) => prevStep - 1)
        }
        current={step}
      >
        {[
          {
            component: (
              <ChooseCurrency
                onCurrencyClick={(currency: Currency) => {
                  setCurrency(currency);
                  setStep(1);
                }}
              />
            ),
            heading: "Send Money",
          },
          {
            component: (
              <ChooseRecipient
                onRecentRecipientClick={(value) => {
                  setRecipient(value);
                }}
                onNextClick={() => setStep(2)}
              />
            ),
            heading: `Send ${
              currency === "usd" ? "USD" : currency === "naira" ? "Naira" : ""
            } `,
          },
          {
            component: (
              <EnterAmount
                currency={currency}
                onEditClick={() => setStep(1)}
                recipient={recipient}
                amount={amount}
                setAmount={setAmount}
                onNextClick={() => setStep(3)}
              />
            ),
            heading: "Enter Amount",
          },
          {
            component: (
              <ConfirmDetails
                amount={amount}
                currency={currency}
                onSendClick={() => setIsSuccess(true)}
                recipient={recipient}
              />
            ),
            heading: "Confirm Details",
          },
        ]}
      </SendLayout>
    </>
  );
};

export default Send;
