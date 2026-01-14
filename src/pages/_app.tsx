import Layout from "@/components/layout";
import LoadingScreen from "@/components/loading-screen";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
// import { JetBrains_Mono } from "next/font/google";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/next"

// export const jetBrainsMono = JetBrains_Mono({
//   subsets: ["latin"],
//   variable: "--font-jetbrains-mono",
//   display: "swap",
// });

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <Head>
        <title>Pranav Kumar Kashyap - Software Engineer</title>
        <meta name="description" content="Portfolio of Pranav Kumar Kashyap" />
        <meta name="keywords" content="Portfolio, Backend Development, Developer, Pranav Kumar Kashyap, Full Stack Developer, Next.js, React, JavaScript, TypeScript" />
        <meta name="author" content="Pranav Kumar Kashyap" />
        <meta property="og:title" content="Pranav Kumar Kashyap" />
        <meta property="og:description" content="Portfolio of Pranav Kumar Kashyap" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pranavkumarkashyap.vercel.app" />
        <meta name="twitter:title" content="Pranav Kumar Kashyap" />
        <meta name="twitter:description" content="Portfolio of Pranav Kumar Kashyap" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@pranavkumarkashyap" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/avatar1.png" />
      </Head>

      <main>
        <LoadingScreen isLoading={isLoading} />
        <Layout>
          <Component {...pageProps} />
          <Analytics/>
          <Toaster />
        </Layout>
      </main>
    </ThemeProvider>
  );
}
