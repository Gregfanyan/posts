import { Fragment } from "react";

import Meta from "../../components/Meta";
import { server } from "../../config";
import ArticleList from "../../components/ArticleList";

function Articles({ articles }) {
  return (
    <Fragment>
      <Meta title="Article Page" />
      <ArticleList articles={articles} />
    </Fragment>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/article`);

  const articles = await res.json();
  return {
    props: {
      articles,
    },
  };
};

export default Articles;
