import { Fragment } from "react";

import Posts from "../components/Posts";

export default function Home({ posts }) {
  return (
    <Fragment>
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
