import PostItem from "../PostItem";
import Container from "../Container";

function Posts({ posts, likeBtnHandleClick, likedList, unLikeBtnHandleClick }) {
  return (
    <Container>
      {posts.map((post) => (
        <PostItem
          key={post.id}
          post={post}
          likeBtnHandleClick={likeBtnHandleClick}
          isLiked={likedList.some((id) => id === post.id)}
          unLikeBtnHandleClick={unLikeBtnHandleClick}
        />
      ))}
    </Container>
  );
}

export default Posts;
