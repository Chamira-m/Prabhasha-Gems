import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="container lg:px-10 px-5">{children}</div>;
};

export default Container;
