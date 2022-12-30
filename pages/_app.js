// import { NextUIProvider } from "@nextui-org/react";
import AuthProvider from "../context/AuthProvider";

import Header from "../components/Header";
import "../styles/globals.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    // <NextUIProvider>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Header />
        <Component {...pageProps} />
      </AuthProvider>
    </QueryClientProvider>
    // </NextUIProvider>
  );
}

export default MyApp;
