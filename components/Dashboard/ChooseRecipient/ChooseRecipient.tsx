import Button from "@/components/Global/Button/Button";
import Flexbox from "@/components/Global/Flexbox/Flexbox.styles";
import FormItem from "@/components/Global/FormItem/FormItem";
import Input from "@/components/Global/Input/Input";
import { Text } from "@/components/Global/Typography/Typography.styles";
import { AtSign } from "@/svg/atsign";
import { Wallet } from "@/svg/wallet";
import { is_valid_recipient } from "@/utils/function";
import { Form } from "antd";
import {
  StyledChooseRecipientContainer,
  StyledRecentList,
  StyledRecentListItem,
  StyledRecentListItemButton,
  StyledRecentListItemDetails,
  StyledRecentListItemIcon,
} from "./ChooseRecipient.styles";
import { IChooseRecipientProps } from "./ChooseRecipient.types";

const ChooseRecipient: React.FC<IChooseRecipientProps> = ({
  onRecentRecipientClick,
  onNextClick,
}) => {
  const [form] = Form.useForm();
  const recipient = Form.useWatch("recipient", form);

  return (
    <StyledChooseRecipientContainer>
      <div>
        <Text variant="sm" color="#6D7175" mb="11px">
          Receiver’s username/address
        </Text>
        <Form
          form={form}
          name="chooseRecipient"
          autoComplete="off"
          layout="vertical"
          requiredMark={false}
          // onFinish={onFinish}
        >
          <FormItem
            name="recipient"
            validateStatus="warning"
            rules={[
              { required: true, message: "This field is required" },
              {
                required: is_valid_recipient(recipient),
                message: "Invalid username/wallet address",
              },
            ]}
            mb="32px"
          >
            <Input placeholder="Recipient username or address" type="name" />
          </FormItem>
        </Form>
        <StyledRecentList as="ul">
          {(
            [
              {
                value: "ThatDeji",
                time: "Used 1 day ago",
                type: "username",
              },
              {
                value: "BipG...F2ja",
                time: "Used 1 month ago",
                type: "address",
              },
            ] as const
          ).map(({ value, time, type }, index) => (
            <StyledRecentListItem key={index}>
              <StyledRecentListItemButton
                onClick={() => {
                  onRecentRecipientClick({ value, type });
                  onNextClick();
                }}
                as="button"
              >
                <StyledRecentListItemIcon>
                  {type === "address" ? <Wallet /> : <AtSign />}
                </StyledRecentListItemIcon>
                <StyledRecentListItemDetails>
                  <Text
                    weight="medium"
                    letterSpacing=" 0.004em"
                    variant="xs"
                    mb="2px"
                  >
                    {value}
                  </Text>
                  <Text
                    color="rgba(32, 34, 35, 0.67)"
                    variant="xxs"
                    letterSpacing=" 0.004em"
                  >
                    {time}
                  </Text>
                </StyledRecentListItemDetails>
              </StyledRecentListItemButton>
            </StyledRecentListItem>
          ))}
        </StyledRecentList>
      </div>
      <Button onClick={onNextClick} disabled={!recipient} buttonType="primary">
        Next
      </Button>
    </StyledChooseRecipientContainer>
  );
};

export default ChooseRecipient;
