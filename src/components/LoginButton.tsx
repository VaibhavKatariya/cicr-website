"use client";

import { useAuth } from "@/context/AuthContext"; // update path if needed
import { auth } from "@/lib/firebase";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { deleteUser, signOut } from "firebase/auth";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const LoginButton = () => {
  const router = useRouter();
  const { user, loading, checkingAuth } = useAuth();
  const [signInWithGoogle, , signInLoading] = useSignInWithGoogle(auth);

  const handleLogin = async () => {
    try {
      const result = await signInWithGoogle();
      if (!result) return;

      const email = result.user.email;

      if (!email?.endsWith("@mail.jiit.ac.in")) {
        toast.error("Only @mail.jiit.ac.in emails are allowed!");

        try {
          await deleteUser(result.user);
        } catch {
          await signOut(auth);
        }

        return;
      }

      toast.success(`Welcome, ${result.user.displayName}!`);
      router.push("/dashboard");
    } catch (err) {
      console.error("Login error:", err);
      toast.error("Something went wrong during login.");
    }
  };

  if (loading || checkingAuth || signInLoading)
    return (
      <Button variant="ghost" onClick={handleLogin}>
        Login <ArrowRight className="ml-2" />
      </Button>
    );

  return user ? (
    <Button variant="ghost" onClick={() => router.push("/dashboard")}>
      Dashboard <ArrowRight className="ml-2" />
    </Button>
  ) : (
    <Button variant="ghost" onClick={handleLogin}>
      Login <ArrowRight className="ml-2" />
    </Button>
  );
};

export default LoginButton;
