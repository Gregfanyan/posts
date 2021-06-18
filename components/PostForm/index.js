import { Fragment, useState } from "react";

import styles from "./PostForm.module.css";

function PostForm({ onAddPostHandler }) {
  const [post, setPost] = useState({
    title: "",
    image: "",
    description: "",
  });

  const { title, image, description } = post;

  const onChange = (e) => {
    let { name, value } = e.currentTarget;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      title: title,
      image: image,
      description: description,
    };

    onAddPostHandler(newPost);
  };

  return (
    <Fragment>
      <h1 className={styles.title}>add new post</h1>
      <div className={styles.container}>
        <form className={styles.formSection} onSubmit={handleSubmit}>
          <label>title</label>
          <input
            placeholder=" Title"
            type="text"
            onChange={onChange}
            value={title}
            name="title"
          />
          <label placeholder="">image</label>
          <input
            placeholder=" Image Link"
            type="text"
            onChange={onChange}
            value={image}
            name="image"
          />
          <label>description</label>
          <input
            placeholder=" Description"
            type="text"
            onChange={onChange}
            value={description}
            name="description"
          />

          <button type="submit" className={styles.button}>
            Submit
          </button>
        </form>
      </div>
    </Fragment>
  );
}

export default PostForm;
