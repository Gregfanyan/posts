import Link from "next/link";

function Navbar() {
  return (
    <header>
      <div>
        <ul>
          <li>
            <Link href="/">home</Link>
          </li>
          <li>
            <Link href="/about">about</Link>
          </li>
          <li>
            <Link href="/new-posts">add new posts</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
