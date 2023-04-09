import React from "react";
import { MainLayoutProps } from "./types";
import Header from "./Header";
import Footer from "./Footer";
import SEO from "./SEO";

const MainLayout = ({ children, title }: MainLayoutProps) => {
  return (
    <>
      <SEO title={title} />
      <Header />
      <main className="mt-20">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
