import Link from "next/link";
import { Fragment } from "react";

import Card from "../Card";

function ArticleItem({ article }) {
  return (
    <Link href={`/article/${article.id}`} passHref>
      <Card>
        <h1>{article.title} &rarr;</h1>
        <p>{article.body}</p>
      </Card>
    </Link>
  );
}

export default ArticleItem;
