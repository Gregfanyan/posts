import { Fragment } from "react";

import Meta from "../../components/Meta";
import { server } from "../../config";

function Articles({ articles }) {
  return (
    <Fragment>
      <Meta title="Article Page" />
      <div>Articles</div>
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
