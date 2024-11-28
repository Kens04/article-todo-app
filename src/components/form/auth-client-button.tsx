"use client";

import { Button } from "@/components/ui";
import {
  createClientComponentClient,
  Session,
} from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

const AuthClientButton = ({ session }: { session: Session | null }) => {
  const supabase = createClientComponentClient();
  const router = useRouter();

  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    });
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  return (
    <>
      {session ? (
        <Button onClick={handleLogout} className="w-full">
          ログアウト
        </Button>
      ) : (
        <Button onClick={handleLogin} className="w-full">
          ログイン
        </Button>
      )}
    </>
  );
};

export default AuthClientButton;
