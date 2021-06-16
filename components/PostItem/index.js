import { Fragment } from "react";
import Link from "next/link";

function PostItem({ post }) {
  return (
    <Link href="/[id]" as={`/${post.id}`}>
      <a>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </a>
    </Link>
  );
}

export default PostItem;
