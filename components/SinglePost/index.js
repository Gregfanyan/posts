import styles from "./SinglePost.module.css";

function SinglePost({ post }) {
  return (
    <a className={styles.container}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </a>
  );
}

export default SinglePost;
