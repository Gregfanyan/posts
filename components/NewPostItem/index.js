import Link from "next/link";
import Image from "next/image";

function NewPostItem({ post }) {
  return (
    <Link href={`/post/${post.id}`} key={post.id}>
      <a>
        <h1>{post.title}</h1>
        <Image src={post.image} alt="Post images" width={400} height={400} />
        <p>{post.description}</p>
      </a>
    </Link>
  );
}

export default NewPostItem;
