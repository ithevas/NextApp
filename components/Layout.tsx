"use client"
import { RecoilRoot } from "recoil";
import Navbar from "./Navbar";

export default function Layout({ children }: { children: React.ReactNode; }) {
  return (
    <div>
      <RecoilRoot>
        <Navbar />
        {children}
      </RecoilRoot>
    </div>
  );
}
