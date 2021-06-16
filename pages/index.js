import { Fragment } from "react";

import Meta from "../components/Meta";
import Posts from "../components/Posts";

export default function Home({ posts }) {
  return (
    <Fragment>
      <Meta />
      <Posts posts={posts} />
    </Fragment>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts/?_limit=6"
  );
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
};
