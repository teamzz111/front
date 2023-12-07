import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectAuth } from "@/store/user";

const AuthChecker = ({ children }: { children: JSX.Element }) => {
  const router = useRouter();
  const { isAuthenticated } = useSelector(selectAuth);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [router, isAuthenticated]);

  return <>{children}</>;
};

export default AuthChecker;
