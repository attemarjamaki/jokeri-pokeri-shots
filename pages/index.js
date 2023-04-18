import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Wheel from "@/components/Wheel";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Jokeri Pokeri Shots</title>
        <meta name="description" content="Very fun shotting gama" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon-slots.png" />
      </Head>
      <Wheel />
    </>
  );
}
