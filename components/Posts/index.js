import PostItem from "../PostItem";

function Posts({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <PostItem post={post} />
      ))}
    </div>
  );
}

export default Posts;
