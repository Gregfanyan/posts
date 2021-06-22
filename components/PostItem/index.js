import { Fragment } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Card from "../Card";

function PostItem({ post }) {
  return (
    <Card>
      <FontAwesomeIcon icon="heart" size="3x" transform="shrink-4 right-130" color='grey' />
      <Link href={`/${post.id}`} passHref>
        <h1>{post.title} &rarr;</h1>
      </Link>
      <p>{post.body}</p>
    </Card>
  );
}

export default PostItem;
