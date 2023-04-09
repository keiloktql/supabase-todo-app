import Head from "next/head";
import React from "react";
import { SEOProps } from "./types";

const SEO = ({ title = "Layers" }: SEOProps): JSX.Element => (
  <Head>
    <meta charSet="utf-8" />
    <title>{title}</title>
  </Head>
);

export default SEO;
