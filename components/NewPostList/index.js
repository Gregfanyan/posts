import NewPostItem from "../NewPostItem";

function NewPostList({ posts }) {
  return (
    <>
      {posts.map((post) => (
        <NewPostItem post={post} />
      ))}
    </>
  );
}

export default NewPostList;
