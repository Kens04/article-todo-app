import AuthClientButton from "@/components/form/auth-client-button";
import { Form, TextField } from "ui";

const LoginForm = () => {

  return (
    <Form className="max-w-lg mx-auto space-y-5">
      <TextField label="メールアドレス" type="text" />
      <TextField label="パスワード" type="password" />
      <AuthClientButton />
    </Form>
  );
};

export default LoginForm;
