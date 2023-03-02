import Avartar from "@/components/Dashboard/Avartar/Avartar";
import { MainCTA } from "@/components/Dashboard/CTA/CTA.styles";
import Transaction from "@/components/Dashboard/Transaction/Transaction";
import Flexbox from "@/components/Global/Flexbox/Flexbox.styles";
import {
  Display,
  Text,
} from "@/components/Global/Typography/Typography.styles";
import { Notification } from "@/svg/notification";
import { Send } from "@/svg/send";
import { Swap } from "@/svg/swap";
import { TopUp } from "@/svg/top-up";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();

  return (
    <>
      <Flexbox
        alignItems="center"
        margin="0 0 36px 0"
        justifyContent="space-between"
      >
        <Flexbox alignItems="center" flexGap="10px">
          <Avartar initials="AY" />
          <Text variant="xs" weight="medium">
            <Text
              color="#6D7175"
              as="span"
              variant="sm"
              weight="regular"
              letterSpacing="0.004em"
            >
              Hi,{" "}
            </Text>
            Ayomide
          </Text>
        </Flexbox>
        <button>
          <Notification />
        </button>
      </Flexbox>
      <Flexbox
        margin="0 0 36px 0"
        flexGap="3px"
        flexDir="column"
        alignItems="center"
      >
        <Text
          color="rgba(32, 34, 35, 0.87)"
          variant="xxs"
          letterSpacing="0.0025em"
        >
          United States Dollar
        </Text>
        <Display weight="bold" variant="sm" letterSpacing="0.0025em">
          $1032.00
        </Display>
      </Flexbox>
      <Flexbox margin="0 0 36px 0" justifyContent="center" flexGap="8px">
        {[
          {
            name: "Send",
            icon: <Send />,
            onClick: () => console.log("Ss"),
          },
          {
            name: "Top Up",
            icon: <TopUp />,
            onClick: () => console.log("Ss"),
          },
          {
            name: "Swap",
            icon: <Swap />,
            onClick: () => router.push("/swap"),
          },
        ].map(({ icon, name, onClick }) => (
          <MainCTA onClick={onClick} key={name}>
            {icon}
            {name}
          </MainCTA>
        ))}
      </Flexbox>
      <Text letterSpacing="0.001em" weight="medium" variant="sm" mb="16px">
        Recent Transactions
      </Text>
      <Text
        letterSpacing="0.004em"
        variant="xs"
        mb="16px"
        color="rgba(32, 34, 35, 0.87)"
      >
        Yesterday
      </Text>
      <Flexbox flexDir="column" as="ul">
        {[
          {
            price: "$102.32",
            status: "sent" as const,
            walletAddress: "0xf5...34et",
          },
          {
            price: "$11.05",
            status: "received" as const,
            walletAddress: "0xf5...34et",
          },
        ].map(({ price, status, walletAddress }, index) => (
          <Transaction
            key={index}
            price={price}
            status={status}
            walletAddress={walletAddress}
          />
        ))}
      </Flexbox>
    </>
  );
};

export default Home;
