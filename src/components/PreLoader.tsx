import Head from "next/head";
import Image from "next/image";

export function PreLoader() {
  return (
    <>
      <Head>
        <title>Fariz Rachman Yusuf</title>
        <meta
          name="description"
          content="I'm a fullstack developer based in Bandung, Indonesia with rock-solid experience in building complex application with modern technologies."
        />
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
