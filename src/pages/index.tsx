import Head from "next/head";
import { Inter } from "next/font/google";
import Card from "@/Components/Card";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Pokemon Details</title>
        <meta name="description" content="Pokemon Details" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Card />
      </main>
    </>
  );
}
