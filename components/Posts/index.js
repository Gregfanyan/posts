import PostItem from "../PostItem";
import Container from "../Container";

const PostStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(1, 1fr)",
  gridGap: "50px",
};

function Posts({
  posts,
  likeBtnHandleClick,
  likedList,
  unLikeBtnHandleClick,
  nextBtn,
  prevBtn,
  resetBtn,
  currentPost,
}) {
  return (
    <Container style={PostStyle}>
      <PostItem
        key={posts[currentPost].id}
        post={posts[currentPost]}
        likeBtnHandleClick={likeBtnHandleClick}
        isLiked={likedList.some((id) => id === posts[currentPost].id)}
        unLikeBtnHandleClick={unLikeBtnHandleClick}
        nextBtn={nextBtn}
        prevBtn={prevBtn}
        resetBtn={resetBtn}
        currentPost={currentPost}
        posts={posts}
      />
    </Container>
  );
}

export default Posts;
