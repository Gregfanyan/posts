import { Fragment } from "react";
import Link from "next/link";

import Card from "../Card";

function PostItem({ post }) {
  return (
    <Link href={`/${post.id}`} passHref>
      <Card>
        <h1>{post.title} &rarr;</h1>
        <p>{post.body}</p>
      </Card>
    </Link>
  );
}

export default PostItem;
