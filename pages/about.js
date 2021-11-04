import Head from "next/head";

export default function AboutPage() {
  console.log("[AboutPage] render");
  return (
    <>
      <Head>
        <title>About - My Blog</title>
        <meta name="description" value="This is my blog" />
      </Head>
      <main>
        <h1>About</h1>
      </main>
    </>
  );
}
