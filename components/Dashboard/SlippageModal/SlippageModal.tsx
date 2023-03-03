import React from "react";
import Flexbox from "@/components/Global/Flexbox/Flexbox.styles";
import { Text } from "@/components/Global/Typography/Typography.styles";
import {
  StyledSlippageValue,
  StyledSlippageValueFormItem,
  StyledSlippageValueInput,
} from "./SlippageModal.styles";
import { ISlippageModalProps, SlippageFormValues } from "./SlippageModal.types";
import Button from "@/components/Global/Button/Button";
import { Form } from "antd";
import Modal from "@/components/Global/Modal/Modal";
import { InfoTwo } from "@/svg/info";

const SlippageModal: React.FC<ISlippageModalProps> = ({
  isOpen,
  onFinish,
  setIsOpen,
}) => {
  const [form] = Form.useForm<SlippageFormValues>();
  const slippageValue = Form.useWatch("slippage", form);

  return (
    <Modal setIsOpen={setIsOpen} isOpen={isOpen}>
      <Flexbox margin="0 0 3px 0" alignItems="center" flexGap="5px">
        <InfoTwo />
        <Text variant="sm" weight="medium" letterSpacing="0.001em">
          Slippage Tolerance
        </Text>
      </Flexbox>
      <Text
        color="rgba(32, 34, 35, 0.87)"
        variant="xs"
        letterSpacing="0.004em"
        mb="14px"
      >
        The expected % difference between the quoted above and the actual price.
      </Text>
      <Flexbox margin="0 0 25px 0" flexGap="16px" alignItems="stretch">
        <Form
          form={form}
          name="slippage"
          autoComplete="off"
          requiredMark={false}
          onFinish={onFinish}
          initialValues={{ slippage: "3" }}
        >
          <StyledSlippageValueFormItem
            name="slippage"
            rules={[
              {
                required: true,
                pattern: /^(\d{1,2}(\.\d{1,2})?|100(\.0{1,2})?)$/,
                message: "A number betwee 0 and 100",
              },
            ]}
          >
            <StyledSlippageValueInput
              borderRadius="2px"
              height="30px"
              placeholder="Enter a value"
              type="text"
            />
          </StyledSlippageValueFormItem>
        </Form>
        <Flexbox flexGap="6px">
          {(["0.5", "1", "3"] as const).map((item) => (
            <StyledSlippageValue
              onClick={() => {
                form.setFieldValue("slippage", item);
              }}
              isSelected={slippageValue === item}
              key={item}
            >
              {item}%
            </StyledSlippageValue>
          ))}
        </Flexbox>
      </Flexbox>
      <Button
        onClick={() => form.submit()}
        htmlType="submit"
        buttonType="primary"
      >
        Understood
      </Button>
    </Modal>
  );
};

export default SlippageModal;
