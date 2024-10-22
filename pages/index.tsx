import { Entry } from "@/components/entry";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Саша & Алина</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <main>
          <Entry />
        </main>
      </div>
    </>
  );
}
