import "@/styles/globals.css";
import ErrorBoundary from "@/components/pages/ErrorBoundary";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}
