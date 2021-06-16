import Link from "next/link";

import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <header className={styles.header}>
      <ul>
        <li>
          <Link href="/">home</Link>
        </li>
        <li>
          <Link href="/about">about</Link>
        </li>
        <li>
          <Link href="/new-posts">add new post</Link>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
