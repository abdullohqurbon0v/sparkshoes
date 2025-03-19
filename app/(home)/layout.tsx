import React from "react";
import Navbar from "./components/navbar";
import { ChildProps } from "@/types";

const layout = ({ children }: ChildProps) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default layout;
