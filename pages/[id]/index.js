import { Fragment } from "react";

import SinglePost from "../../components/SinglePost";
import styles from "./Post.module.css";
import Meta from "../../components/Meta";
import { server } from "../../config";

function Post({ post }) {
  return (
    <div className={styles.container}>
      <Meta title={post.title} />
      <SinglePost post={post} />
    </div>
  );
}

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/article/${context.params.id}`);
  const post = await res.json();
  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/article`);
  const posts = await res.json();

  const ids = posts.map((post) => post.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  return {
    fallback: "blocking",
    paths,
  };
};

export default Post;
