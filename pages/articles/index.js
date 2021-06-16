import { Fragment } from "react";

import Meta from "../../components/Meta";
import articles from "../articles";

function Articles() {
  console.log(articles);
  return (
    <Fragment>
      <Meta title="Article Page" />
      <div>Articles</div>
    </Fragment>
  );
}

export default Articles;
