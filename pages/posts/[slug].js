import Head from "next/head";
import { getPost, getSlugs } from "../../lib/posts";

export default function PostPage({ post }) {
  //   console.log("[Post] render", post);
  return (
    <>
      <Head>
        <title>{post.title} - My Blog</title>
      </Head>
      <main>
        <p>{post.date}</p>
        {/* <h1>{post.title}</h1> */}
        <article dangerouslySetInnerHTML={{ __html: post.body }} />
        {/* <p>{post.body}</p> */}
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const slugs = await getSlugs();
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  // console.log("[Post] getStaticProps", slug);
  const post = await getPost(slug);
  return {
    props: {
      post,
    },
  };
}
