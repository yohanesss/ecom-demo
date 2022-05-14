import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

type AuthRouteWrapperProps = {
  children: ReactNode;
};

const isLoggedIn = true;

export const AuthRouterWrapper = ({ children }: AuthRouteWrapperProps) => {
  if (!isLoggedIn) {
    return <Navigate to="/" />;
  } else {
    return <>{children}</>;
  }
};
