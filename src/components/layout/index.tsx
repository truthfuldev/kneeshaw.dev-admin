"use client";

import Sidebar from "./Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-row gap-2">
      <Sidebar />

      {children}
    </div>
  );
}
