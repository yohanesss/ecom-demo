import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LayoutContainer from "./features/Layout/LayoutContainer";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes/Route";
import { AuthRouterWrapper } from "./utils/components/AuthRouterWrapper";

function App() {
  return (
    <LayoutContainer>
      <Routes>
        {routes.map((route) => (
          <Route
            path={route.path}
            element={
              // route.protected ? (
              //   <AuthRouterWrapper>{route.element}</AuthRouterWrapper>
              // ) : (
              route.element
              // )
            }
          />
        ))}
      </Routes>
    </LayoutContainer>
  );
}

export default App;
