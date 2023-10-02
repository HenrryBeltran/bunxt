import { Metadata } from "next";
import { FC, ReactNode } from "react";

export const metadata: Metadata = {
  title: "About Bunxt",
  description: "About Page - NextJS app with bun",
};

interface Props {
  children: ReactNode;
}

const AboutLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <nav className="py-4 text-center text-slate-800 dark:text-slate-200">About Navbar</nav>
      <>{children}</>
    </>
  );
};

export default AboutLayout;
