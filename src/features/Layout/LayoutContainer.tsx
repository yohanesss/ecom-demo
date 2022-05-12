import React from "react";

const Header = () => {
  return <div>This is header</div>;
};

type LayoutContainerProps = {
  children: React.ReactNode;
};

const LayoutContainer = ({ children }: LayoutContainerProps) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default LayoutContainer;
