"use client";

import { Button } from "@/components/ui";
import {
  createClientComponentClient
} from "@supabase/auth-helpers-nextjs";
import { IconBrandGoogle } from "justd-icons";

const AuthClientButton = () => {
  const supabase = createClientComponentClient();

  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    });
  };

  return (
    <>
    <Button className="w-full">
      ログイン
    </Button>
    <Button intent="secondary" onClick={handleLogin} className="w-full">
      <IconBrandGoogle />
      Googleでログイン
    </Button>
    </>
  );
};

export default AuthClientButton;
