import Link from "next/link";
import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Card from "../Card";

function ArticleItem({ article }) {
  return (
    <Card>
      <FontAwesomeIcon
        icon="heart"
        size="3x"
        transform="shrink-4 right-130"
        color="grey"
      />
      <Link href={`/article/${article.id}`} passHref>
        <h1>{article.title} &rarr;</h1>
      </Link>
      <p>{article.body}</p>
    </Card>
  );
}

export default ArticleItem;
