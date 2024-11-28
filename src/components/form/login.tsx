import AuthServerButton from "@/components/form/auth-server-button";
import { Form, TextField } from "ui";

const LoginForm = () => {
  return (
    <Form className="max-w-lg mx-auto space-y-5">
      <TextField label="メールアドレス" type="text" />
      <TextField label="パスワード" type="password" />
      <AuthServerButton />
    </Form>
  );
};

export default LoginForm;
