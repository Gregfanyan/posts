import NewPostItem from "../NewPostItem";

function NewPostList({ posts }) {
  return (
    <>
      {posts.map((post) => (
        <NewPostItem post={post} key={post.id} />
      ))}
    </>
  );
}

export default NewPostList;
