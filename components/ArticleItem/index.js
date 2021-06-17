import Link from "next/link";
import { Fragment } from "react";

import styles from "../PostItem/PostItem.module.css";

function ArticleItem({ article }) {
  return (
    <Link href="/article/[articleid]" as={`/article/${article.id}`}>
      <a className={styles.container}>
        <h1>{article.title} &rarr;</h1>
        <p>{article.body}</p>
      </a>
    </Link>
  );
}

export default ArticleItem;
