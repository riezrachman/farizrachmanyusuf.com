import Head from "next/head";
import Image from "next/image";

export default function PreLoader() {
  return (
    <>
      <Head>
        <title>Fariz Rachman Yusuf</title>
        <meta name="description" content="Fariz Rachman Yusuf" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex items-center justify-center h-screen bg-[#fbfaf9]">
        <Image
          src="/assets/images/logo-animated.gif"
          alt="FRY"
          width={240}
          height={240}
        />
      </main>
    </>
  );
}
