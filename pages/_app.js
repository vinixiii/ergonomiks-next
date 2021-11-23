import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { appWithTranslation } from 'next-i18next';

function App({ Component, pageProps }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      {isMounted && <Component {...pageProps} />}
    </>
  );
}

export default appWithTranslation(App);
