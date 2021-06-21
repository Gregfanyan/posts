import { Fragment } from "react";
import { useRouter } from "next/router";

import Meta from "../../components/Meta";
import PostForm from "../../components/PostForm";
import styles from "./NewPost.module.css";

function AddPosts() {
  const router = useRouter();

  async function onAddPostHandler(entereData) {
    const response = await fetch("/api/new-post", {
      method: "POST",
      body: JSON.stringify(entereData),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    router.push("/");
  }

  return (
    <Fragment>
      <Meta title="Add New Posts" />
      <div>
        <PostForm onAddPostHandler={onAddPostHandler} />
      </div>
    </Fragment>
  );
}

export default AddPosts;
