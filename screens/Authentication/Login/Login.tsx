import Button from "@/components/Global/Button/Button";
import Flexbox from "@/components/Global/Flexbox/Flexbox.styles";
import Form from "@/components/Global/Form/Form.styles";
import FormItem from "@/components/Global/FormItem/FormItem";
import Input from "@/components/Global/Input/Input";
import { Text } from "@/components/Global/Typography/Typography.styles";
import AuthLayoutOne from "@/layouts/AuthLayoutOne/AuthLayoutOne";
import Link from "next/link";

const Login = () => {
  return (
    <AuthLayoutOne
      heading="Welcome back!"
      tagline="Sign in to continue to your dashboard"
    >
      <Form
        name="login"
        autoComplete="off"
        layout="vertical"
        requiredMark={false}
        // onFinish={onFinish}
      >
        <Flexbox flexGap="16px" flexDir="column" margin="0 0 32px 0">
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
            name="password"
            rules={[{ required: true, message: "This field is required" }]}
          >
            <Input placeholder="Password" type="password" />
          </FormItem>
        </Flexbox>
        <Button mb="24px" htmlType="submit" buttonType="primary">
          Sign Up
        </Button>
        <Text textAlign="center" variant="sm" weight="regular">
          Forgot Password?{" "}
          <Link href="/reset">
            <Text color="#007AFF" as="span" variant="sm" weight="regular">
              Reset
            </Text>
          </Link>
        </Text>
      </Form>
    </AuthLayoutOne>
  );
};

export default Login;
