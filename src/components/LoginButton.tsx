"use client";

import { auth } from "@/lib/firebase";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { deleteUser, signOut } from "firebase/auth";
import toast from "react-hot-toast";

const LoginButton = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const handleLogin = async () => {
    try {
      const result = await signInWithGoogle();

      if (!result) return;

      const email = result.user.email;

      if (!email?.endsWith("@mail.jiit.ac.in")) {
        toast.error("Only @mail.jiit.ac.in emails are allowed!");

        try {
          await deleteUser(result.user);
        } catch (deleteError) {
          console.warn("Auto-delete failed, trying signOut...");
          await signOut(auth);
        }

        return;
      }

      toast.success(`Welcome, ${result.user.displayName}!`);
      console.log("User:", result.user);
    } catch (err) {
      console.error("Login error:", err);
      toast.error("Something went wrong during login.");
    }
  };

  return (
    <Button variant="ghost" onClick={handleLogin} disabled={loading}>
      {loading ? "Loading..." : "Login"} <ArrowRight className="ml-2" />
    </Button>
  );
};

export default LoginButton;
