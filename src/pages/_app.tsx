import { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/toaster";
import "@/assets/globals.css";
import "../../styles.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <Component {...pageProps} />
      <Toaster />
    </ThemeProvider>
  );
}
