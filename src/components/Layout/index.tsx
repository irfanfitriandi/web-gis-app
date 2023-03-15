import React from "react";
import Sidebar from "../Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="flex">
      <Sidebar />
      <div>{children}</div>
    </main>
  );
};

export default Layout;
