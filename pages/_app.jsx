import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React, { useState, useEffect } from 'react';
import LoadingBar from 'react-top-loading-bar';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeComplete", () => {
      setProgress(100); // Set progress when route change completes
    });

    return () => {
      router.events.off("routeChangeComplete", () => {
        setProgress(0); // Reset progress when route change starts
      });
    }
  }, [router.events]);

  return (
    <>
      <LoadingBar
        color='red'
        progress={progress}
        waitingTime={500}
        onLoaderFinished={() => setProgress(0)}
      />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}