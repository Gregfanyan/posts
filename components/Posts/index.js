/* import PostItem from "../PostItem";
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
 */

import PostItem from "../PostItem";
import Container from "../Container";

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
    <Container>
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
