import PostItem from "../PostItem";
import Container from "../Container";

function Posts({ posts }) {
  return (
    <Container>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </Container>
  );
}

export default Posts;
