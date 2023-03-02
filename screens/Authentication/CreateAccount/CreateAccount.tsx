import Button from "@/components/Global/Button/Button";
import Checkbox from "@/components/Global/Checkbox/Checkbox";
import Flexbox from "@/components/Global/Flexbox/Flexbox.styles";
import Form from "@/components/Global/Form/Form.styles";
import FormItem from "@/components/Global/FormItem/FormItem";
import Input from "@/components/Global/Input/Input";
import { Text } from "@/components/Global/Typography/Typography.styles";
import AuthLayoutOne from "@/layouts/AuthLayoutOne/AuthLayoutOne";
import { Google } from "@/svg/google";
import Link from "next/link";

const CreateAccount = () => {
  return (
    <AuthLayoutOne
      heading="Create an account"
      tagline="Join other Paypeers for faster transaction"
    >
      <Form
        name="createAccount"
        autoComplete="off"
        layout="vertical"
        requiredMark={false}
        // onFinish={onFinish}
      >
        <Flexbox flexGap="16px" flexDir="column" margin="0 0 32px 0">
          <FormItem
            name="fullName"
            rules={[{ required: true, message: "This field is required" }]}
          >
            <Input placeholder="Full Name" type="text" />
          </FormItem>
          <FormItem
            name="email"
            rules={[
              { required: true, message: "This field is required" },
              { type: "email", message: "Please enter a valid email" },
            ]}
          >
            <Input placeholder="Email Address" type="email" />
          </FormItem>
          <FormItem
            name="mobileNumber"
            rules={[{ required: true, message: "This field is required" }]}
          >
            <Input placeholder="Mobile Number" type="text" />
          </FormItem>
          <FormItem
            name="password"
            rules={[{ required: true, message: "This field is required" }]}
          >
            <Input placeholder="Password" type="password" />
          </FormItem>
        </Flexbox>
        <Flexbox wrap="nowrap" margin="0 0 36px 0" flexGap="9px">
          <Checkbox />
          <Text letterSpacing="0.004em" variant="xs" weight="regular">
            <Text color="#6D7175" as="span" variant="xs" weight="regular">
              I accept the
            </Text>{" "}
            Terms and Conditions{" "}
            <Text color="#6D7175" as="span" variant="xs" weight="regular">
              &
            </Text>
            {"  "}
            Privacy Policy
          </Text>
        </Flexbox>
        <Flexbox margin="0 0 30px 0" flexDir="column" flexGap="9px">
          <Button htmlType="submit" buttonType="primary">
            Sign Up
          </Button>
          <Button icon={<Google />} buttonType="secondary">
            Sign in with Google
          </Button>
        </Flexbox>
        <Text textAlign="center" variant="sm" weight="regular">
          Already have an account?{" "}
          <Link href="/login">
            <Text color="#007AFF" as="span" variant="sm" weight="regular">
              Sign In
            </Text>
          </Link>
        </Text>
      </Form>
    </AuthLayoutOne>
  );
};

export default CreateAccount;
