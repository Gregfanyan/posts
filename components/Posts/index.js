import PostItem from "../PostItem";

import styles from "./Posts.module.css";

function Posts({ posts }) {
  return (
    <div className={styles.posts}>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Posts;
