"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";
import toast from "react-hot-toast";

export default function DashboardPage() {
  const { user, loading, checkingAuth } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !checkingAuth && !user) {
      toast.error("Please log in to access the dashboard");
      router.push("/login");
    }
  }, [user, loading, checkingAuth]);

  if (loading || checkingAuth) return <p>Loading...</p>;

  let userEmail = user?.email || "Not available";
  let enroll = userEmail.split("@")[0] || "Not available";


  return (
    <div>
      <h1>Welcome to Dashboard</h1>
      <p>Hello {user?.displayName}</p>
      <p>email {user?.email}</p>
      <p>enroll:  {enroll}</p>
    </div>
  );
}
