import React, { Fragment, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Card from "../Card";
import styles from "./PostItem.module.css";

function PostItem({ post, likeBtnHandleClick, isLiked, unLikeBtnHandleClick }) {
  return (
    <Card>
      <FontAwesomeIcon
        icon="heart"
        size="3x"
        transform="shrink-4 right-130"
        color={!isLiked ? "grey" : "black"}
        onClick={
          !isLiked
            ? () => likeBtnHandleClick(post.id)
            : () => unLikeBtnHandleClick(post.id)
        }
      />
      <Link href={`/${post.id}`} passHref>
        <h1>{post.title} &rarr;</h1>
      </Link>
      <p>{post.body}</p>
    </Card>
  );
}

export default PostItem;
