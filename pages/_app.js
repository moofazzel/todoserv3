// import { NextUIProvider } from "@nextui-org/react";
import AuthProvider from "../context/AuthProvider";

import Header from "../components/Header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    // <NextUIProvider>
    <AuthProvider>
      <Header />
      <Component {...pageProps} />
    </AuthProvider>
    // </NextUIProvider>
  );
}

export default MyApp;
