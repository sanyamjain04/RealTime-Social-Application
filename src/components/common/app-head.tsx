import Head from 'next/head';

export function AppHead(): JSX.Element {
  return (
    <Head>
      <title>Chatsapp</title>
      <meta name="og:title" content="Chatsapp" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="manifest" href="/site.webmanifest" key="site-manifest" />
      <meta name="Chatsapp:site" content="@Sanyamn jain" />
      <meta name="Chatsapp:card" content="summary_large_image" />
    </Head>
  );
}
