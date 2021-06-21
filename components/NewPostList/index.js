import NewPostItem from "../NewPostItem";
import Container from "../Container";

function NewPostList({ posts }) {
  return (
    <Container>
      {posts.map((post) => (
        <NewPostItem post={post} key={post.id} />
      ))}
    </Container>
  );
}

export default NewPostList;
