import Link from "next/link";
import Image from "next/image";

import styles from "../PostItem/PostItem.module.css";

function NewPostItem({ post }) {
  return (
    <Link href="/post/[id]" as={`/post/${post.id}`} key={post.id}>
      <a className={styles.container}>
        <h1>{post.title} &rarr;</h1>
        <Image
          src={post.image}
          alt="Picture of the author"
          width={500}
          height={500}
        />
        <p>{post.description}</p>
      </a>
    </Link>
  );
}

export default NewPostItem;
