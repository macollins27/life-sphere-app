"use client";

import { useSession as useNextAuthSession } from "next-auth/react";

export function useSession() {
  const session = useNextAuthSession();

  return {
    ...session,
    user: session.data?.user,
    isAuthenticated: session.status === "authenticated",
    isLoading: session.status === "loading",
  };
}
