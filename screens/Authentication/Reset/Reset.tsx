import React from "react";
import Button from "@/components/Global/Button/Button";
import Flexbox from "@/components/Global/Flexbox/Flexbox.styles";
import Form from "@/components/Global/Form/Form.styles";
import FormItem from "@/components/Global/FormItem/FormItem";
import Input from "@/components/Global/Input/Input";
import { Text } from "@/components/Global/Typography/Typography.styles";
import AuthLayoutTwo from "@/layouts/AuthLayoutTwo/AuthLayoutTwo";
import { useRouter } from "next/router";
import OtpInput from "@/components/Global/OtpInput/OtpInput";

const Reset = () => {
  const router = useRouter();
  const [step, setStep] = React.useState(0);
  const [otp, setOtp] = React.useState(Array<string>(4).fill(""));
  const [isCountdownActive, setIsCountdownActive] = React.useState(false);
  const [countdown, setCountdown] = React.useState(20);
  const countdownInterval = React.useRef<NodeJS.Timer | undefined>();

  React.useEffect(() => {
    if (isCountdownActive && countdown > 0) {
      countdownInterval.current = setInterval(() => {
        setCountdown((countdown) => countdown - 1);
      }, 1000);
    } else {
      setIsCountdownActive(false);
      countdownInterval.current && clearInterval(countdownInterval.current);
    }
    return () => clearInterval(countdownInterval.current);
  }, [countdown, isCountdownActive]);

  return (
    <AuthLayoutTwo
      onBackClick={step === 0 ? () => router.back() : () => setStep(0)}
      current={step}
    >
      {[
        {
          component: (
            <Form
              name="resetPassword"
              autoComplete="off"
              layout="vertical"
              requiredMark={false}
              onFinish={(values) => {
                setStep(1);
                setIsCountdownActive(true);
                setCountdown(20);
              }}
            >
              <Flexbox flexGap="32px" flexDir="column">
                <FormItem
                  name="email"
                  rules={[
                    { required: true, message: "This field is required" },
                    { type: "email", message: "Please enter a valid email" },
                  ]}
                >
                  <Input placeholder="Email Address" type="email" />
                </FormItem>
                <Button mb="24px" htmlType="submit" buttonType="primary">
                  Submit
                </Button>
              </Flexbox>
            </Form>
          ),
          heading: "Reset Password",
          tagline:
            "Please enter the email address associated with your account",
        },
        {
          component: (
            <Flexbox flexGap="32px" flexDir="column" alignItems="center">
              <OtpInput setState={setOtp} state={otp} />
              <Button
                disabled={!otp.every((item) => item.trim())}
                onClick={() => {
                  setStep(2);
                  setIsCountdownActive(false);
                  setCountdown(20);
                }}
                htmlType="submit"
                buttonType="primary"
              >
                Proceed
              </Button>
              <Text textAlign="center" variant="sm" weight="regular">
                Didn’t receive code?{" "}
                <Text color="#007AFF" as="button" variant="sm" weight="regular">
                  Resend
                </Text>{" "}
                ({countdown}s)
              </Text>
            </Flexbox>
          ),
          heading: "Enter OTP",
          tagline: "Enter the 4-digit code has been sent to your email address",
        },
        {
          component: (
            <Form
              name="resetPassword"
              autoComplete="off"
              layout="vertical"
              requiredMark={false}
              // onFinish={onFinish}
            >
              <Flexbox flexGap="16px" flexDir="column" margin="0 0 32px 0">
                <FormItem
                  name="password"
                  rules={[
                    { required: true, message: "This field is required" },
                  ]}
                >
                  <Input placeholder="Password" type="password" />
                </FormItem>
                <FormItem
                  name="confirmPassword"
                  rules={[
                    { required: true, message: "This field is required" },
                  ]}
                >
                  <Input placeholder="Re-enter Password" type="password" />
                </FormItem>
              </Flexbox>
              <Button htmlType="submit" buttonType="primary">
                Save
              </Button>
            </Form>
          ),
          heading: "Change Password",
          tagline:
            "Your password has been reset, enter a new password different from the old one",
        },
      ]}
    </AuthLayoutTwo>
  );
};

export default Reset;
