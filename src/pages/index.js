import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Next.js 101</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white p-4">
        <Hero />
        {/* <Link href="page-two">Go to Page Two</Link> */}
      </main>
    </Layout>
  );
}
