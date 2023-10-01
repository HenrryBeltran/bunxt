import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { FC, ReactNode } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bunxt",
  description: "NextJS app with bun",
};

interface Props {
  children: ReactNode;
}

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="py-4 text-center text-xl font-light uppercase tracking-widest">
          Main navbar
        </nav>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
