import React, { useEffect } from "react";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/router";
import { AuthGuardProps } from "./types";

const AuthGuard = ({ children }: AuthGuardProps) => {
  const { auth } = useAuth();

  const router = useRouter();

  useEffect(() => {
    if (auth) {
      if (!auth.loading && !auth.userInfo) {
        router.push("/login");
      }
    }
  }, [auth]);

  // show loading indicator while the auth provider is still loading
  if (auth?.loading) {
    return <h1>Application Loading</h1>;
  }

  // if auth loaded with a valid user, show protected page
  if (!auth?.loading && auth?.userInfo) {
    return <>{children}</>;
  }

  // otherwise don't return anything, will do a redirect from useEffect
  return null;
};

export default AuthGuard;
