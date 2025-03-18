import React from "react";
import Navbar from "./components/navbar";

const layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default layout;
