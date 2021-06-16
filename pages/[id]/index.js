function Post({ posts }) {
  return <div>{posts.title}</div>;
}

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
};

/* export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
}; */

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await res.json();

  const ids = posts.map((post) => post.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  return {
    fallback: "blocking",
    paths,
  };
};

export default Post;
