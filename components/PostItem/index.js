import { Fragment } from "react";
import Link from "next/link";

import styles from "./PostItem.module.css";

function PostItem({ post }) {
  return (
    <Link href="/[id]" as={`/${post.id}`}>
      <a className={styles.container}>
        <h1>{post.title} &rarr;</h1>
        <p>{post.body}</p>
      </a>
    </Link>
  );
}

export default PostItem;
