import React, { Fragment, useEffect, useState } from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import localforage from "localforage";

import Meta from "../components/Meta";
import Posts from "../components/Posts";
import { server } from "../config";

config.autoAddCss = false;

export default function Home({ posts }) {
  const [likedList, setLikedList] = useState([]);
  const [currentPost, setCurrentPost] = useState(0);

  const resetBtn = () => {
    setCurrentPost(0);
  };

  const nextBtn = () => {
    setCurrentPost((prev) => prev + 1);
  };

  const prevBtn = () => {
    setCurrentPost((prev) => prev - 1);
  };

  useEffect(() => {
    localforage.getItem("likedItem").then((val) => {
      if (!val) {
        setLikedList([]);
      } else {
        setLikedList(val);
      }
    });
  }, []);

  const likeBtnHandleClick = (id) => {
    setLikedList((prev) => {
      const newState = [...prev, id];
      localforage.setItem("likedItem", newState);
      return newState;
    });
  };

  const unLikeBtnHandleClick = (id) => {
    setLikedList((prev) => {
      const filtered = prev.filter((filteredId) => filteredId !== id);
      localforage.setItem("likedItem", filtered);
      return filtered;
    });
  };

  return (
    <Fragment>
      <Meta />
      <Posts
        posts={posts}
        likeBtnHandleClick={likeBtnHandleClick}
        likedList={likedList}
        unLikeBtnHandleClick={unLikeBtnHandleClick}
        resetBtn={resetBtn}
        nextBtn={nextBtn}
        prevBtn={prevBtn}
        currentPost={currentPost}
      />
    </Fragment>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/article`);
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
};
