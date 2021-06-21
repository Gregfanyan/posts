import Link from "next/link";

function NewPostItem({ post }) {
  return (
    <Link href="/post/[id]" as={`/post/${post.id}`} key={post.id}>
      <a>
        <h3>{post.title}</h3>
      </a>
    </Link>
  );
}

export default NewPostItem;
