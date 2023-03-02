import React from "react";
import Avartar from "@/components/Dashboard/Avartar/Avartar";
import { MainCTA } from "@/components/Dashboard/CTA/CTA.styles";
import Transaction from "@/components/Dashboard/Transaction/Transaction";
import Flexbox from "@/components/Global/Flexbox/Flexbox.styles";
import {
  Display,
  Text,
} from "@/components/Global/Typography/Typography.styles";
import DashboardSecondaryLayout from "@/layouts/DashboardSecondaryLayout/DashboardSecondaryLayout";
import SwapInput from "@/components/Dashboard/SwapInput/SwapInput";
import { SwapButton, SwapInputContainer } from "./Swap.styles";
import { SwapTwo } from "@/svg/swap-two";
import type { Direction } from "@/types/global";
import { Info } from "@/svg/info";
import Button from "@/components/Global/Button/Button";
import SlippageModal from "@/components/Dashboard/SlippageModal/SlippageModal";

const Swap = () => {
  const [input, setInput] = React.useState({
    send: "0.0",
    receive: "0.0",
  });
  const [swapDir, setSwapDir] = React.useState<Direction>("up");
  const [isOpenSlippageModal, setIsOpenSlippageModal] = React.useState(false);
  const [slippageValue, setSlippageValue] = React.useState("3");

  return (
    <DashboardSecondaryLayout heading="Swap">
      <SlippageModal
        isOpen={isOpenSlippageModal}
        onFinish={(values) => {
          setSlippageValue(values.slippage);
          setIsOpenSlippageModal(false);
        }}
        setIsOpen={setIsOpenSlippageModal}
      />
      <SwapInputContainer>
        <SwapInput
          currency="naira"
          setState={setInput}
          state={input}
          status="sent"
          balance="$1032.00"
          onMaxClick={() =>
            setInput((prevInput) => ({
              ...prevInput,
              send: "1032.00",
            }))
          }
        />
        <SwapInput
          currency="naira"
          setState={setInput}
          state={input}
          status="received"
        />
        <SwapButton
          onClick={() => {
            setSwapDir((prevSwapDir) => (prevSwapDir === "up" ? "down" : "up"));
            setInput((prevInput) => ({
              receive: prevInput.send,
              send: prevInput.receive,
            }));
          }}
          direction={swapDir}
        >
          <SwapTwo />
        </SwapButton>
      </SwapInputContainer>
      <Flexbox flexDir="column" flexGap="14px" margin="0 0 20vh 0">
        {[
          {
            title: "Receiving address",
            value: "0x7a8...345c9",
          },
          {
            title: "Slippage Tolerance",
            value: `${slippageValue}%`,
            onInfoClick: () => setIsOpenSlippageModal(true),
          },
          {
            title: "Estimated Fees",
            value: "$0.12344",
            onInfoClick: () => console.log("dd"),
          },
          {
            title: "Price Impact",
            value: "0.58%",
            onInfoClick: () => console.log("dd"),
          },
        ].map(({ onInfoClick, title, value }, index) => (
          <Flexbox
            alignItems="center"
            width="100%"
            justifyContent="space-between"
            key={index}
          >
            <Flexbox alignItems="center" flexGap="4px">
              <Text
                color="rgba(32, 34, 35, 0.87)"
                letterSpacing="0.004em"
                variant="xs"
              >
                {title}
              </Text>
              {onInfoClick && (
                <button onClick={onInfoClick}>
                  <Info />
                </button>
              )}
            </Flexbox>
            <Text
              color={
                title.toLowerCase().includes("price") ? "#27A17A" : "#202223"
              }
              letterSpacing="0.004em"
              variant="xs"
              weight="medium"
            >
              {value}
            </Text>
          </Flexbox>
        ))}
      </Flexbox>
      <Button
        disabled={!(Number(input.send) && Number(input.receive))}
        buttonType="primary"
      >
        Swap now
      </Button>
    </DashboardSecondaryLayout>
  );
};

export default Swap;
