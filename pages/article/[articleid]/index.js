import { Fragment } from "react";

import Meta from "../../../components/Meta";
import { server } from "../../../config";

function Article({ article }) {
  return (
    <div>
      <Meta />
      <div>{article.title.toString()}</div>
    </div>
  );
}

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/article/${context.params.id}`);
  const article = await res.json();
  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/article/`);

  const articles = await res.json();
  const ids = articles.map((article) => article.id);

  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    fallback: "blocking",
    paths: paths,
  };
};

export default Article;
