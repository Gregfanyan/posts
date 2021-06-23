import PostItem from "../PostItem";
import Container from "../Container";

function Posts({ posts, likeBtnHandleClick, likedList }) {
  return (
    <Container>
      {posts.map((post) => (
        <PostItem
          key={post.id}
          post={post}
          likeBtnHandleClick={likeBtnHandleClick}
          isLiked={likedList.some((id) => id === post.id)}
        />
      ))}
    </Container>
  );
}

export default Posts;
