import { Fragment } from "react";

import styles from "./PostForm.module.css";

function PostForm() {
  return (
    <Fragment>
      <h1 className={styles.title}>add new post</h1>
      <div className={styles.container}>
        <form className={styles.formSection}>
          <label>title</label>
          <input placeholder="Add Title" type="text" />
          <label placeholder="">image</label>
          <input placeholder="Add Image Link" type="text" />
          <label>description</label>
          <input placeholder="Add Description" type="text" />
          <button className={styles.button}>Submit</button>
        </form>
      </div>
    </Fragment>
  );
}

export default PostForm;
