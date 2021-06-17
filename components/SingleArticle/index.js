import styles from "../SinglePost/SinglePost.module.css";

function SingleArticle({ article }) {
  return (
    <a className={styles.container}>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
    </a>
  );
}

export default SingleArticle;
