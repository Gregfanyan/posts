import Link from "next/link";

import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <header className={styles.header}>
      <ul>
        <li>
          <Link href="/">posts</Link>
        </li>
        <li>
          <Link href="/articles">articles</Link>
        </li>
        <li>
          <Link href="/new-post">latest posts</Link>
        </li>
        <li>
          <Link href="/add-posts">add new post</Link>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
