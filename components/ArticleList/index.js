import ArticleItem from "../ArticleItem";
import styles from "../Posts/Posts.module.css";

function ArticleList({ articles }) {
  return (
    <div className={styles.posts}>
      {articles.map((article) => (
        <ArticleItem key={article.id} article={article} />
      ))}
    </div>
  );
}

export default ArticleList;
