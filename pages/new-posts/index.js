import { Fragment } from "react";

import Meta from "../../components/Meta";
import PostForm from "../../components/PostForm";
import styles from "./NewPost.module.css";

function NewPosts() {
  return (
    <Fragment>
      <Meta title="Add New Posts" />
      <div>
        <PostForm />
      </div>
    </Fragment>
  );
}

export default NewPosts;
