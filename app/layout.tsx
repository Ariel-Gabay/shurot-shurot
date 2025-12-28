import type { Metadata } from "next";
import { ReactNode } from "react";
import "@/lib/styles/globals.scss";

export const metadata: Metadata = {
  title: "שורות שורות",
  description: "blog",
};

interface Props {
  children: ReactNode;
}

const Home = ({ children }: Props) => {
  return (
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  );
};

export default Home;
