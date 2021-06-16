import { Fragment } from "react";

function PostItem({ post }) {
  console.log(post);
  return (
    <Fragment>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </Fragment>
  );
}

export default PostItem;
