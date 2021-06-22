import { Fragment } from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

import Meta from "../components/Meta";
import Posts from "../components/Posts";
import { server } from "../config";

config.autoAddCss = false;

export default function Home({ posts }) {
  return (
    <Fragment>
      <Meta />
      <Posts posts={posts} />
    </Fragment>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/article`);
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
};
