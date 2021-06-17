import { Fragment } from "react";

import Meta from "../../../components/Meta";
import SingleArticle from "../../../components/SingleArticle";
import styles from "./Article.module.css";

function Article({ article }) {
  return (
    <div className={styles.container}>
      <Meta />
      <SingleArticle article={article} />
    </div>
  );
}

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );
  const article = await res.json();
  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await res.json();

  const ids = posts.map((post) => post.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  return {
    fallback: "blocking",
    paths,
  };
};

export default Article;
