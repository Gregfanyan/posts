import React, { Fragment, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Card from "../Card";
import styles from "./PostItem.module.css";

function PostItem({
  post,
  likeBtnHandleClick,
  isLiked,
  unLikeBtnHandleClick,
  prevBtn,
  nextBtn,
  resetBtn,
  currentPost,
  posts,
}) {
  return (
    <>
      <div className={styles.buttonContainer}>
        <button onClick={resetBtn} disabled={currentPost === 0}>
          restart
        </button>
        <button onClick={prevBtn} disabled={currentPost === 0}>
          prev
        </button>
        <button onClick={nextBtn} disabled={currentPost === posts.length - 1}>
          next
        </button>
      </div>
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
          {post && <h1>{post.title} &rarr;</h1>}
        </Link>
        {post && <p>{post.body}</p>}
      </Card>
    </>
  );
}

export default PostItem;
