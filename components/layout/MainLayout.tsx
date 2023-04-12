import React from "react";
import { MainLayoutProps } from "./types";
import Header from "./Header";
import Footer from "./Footer";
import SEO from "./SEO";

const MainLayout = ({ children, title }: MainLayoutProps) => (
  <>
    <SEO title={title} />
    <Header />
    <main className="mt-20 min-h-[calc(100vh-80px)]">{children}</main>
    <Footer />
  </>
);

export default MainLayout;
