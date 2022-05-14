import { ReactNode } from "react";
import { HomeContainer } from "../features/Home/HomeContainer";

interface IRoute {
  path: string;
  element: ReactNode;
  name: string;
  protected: boolean;
}

export const routes: IRoute[] = [
  {
    path: "/",
    element: <HomeContainer />,
    name: "Home",
    protected: false,
  },
  {
    path: "/test",
    element: <h1>Test</h1>,
    name: "Test",
    protected: false,
  },
];
