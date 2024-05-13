import "@/styles/globals.css";
import { Web3Provider } from "@/utils/web3provider";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Web3Provider>
      <Toaster/>
      {" "}
      <Component {...pageProps} />
    </Web3Provider>
  );
}
