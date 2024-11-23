import LoginButton from "@/components/form/login-button";
import { Form, TextField } from "ui";

const LoginForm = () => {
  return (
    <Form>
      <TextField label="Name" />
      <LoginButton />
    </Form>
  );
};

export default LoginForm;
