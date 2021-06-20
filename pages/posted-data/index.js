import { MongoClient } from "mongodb";

function PostedData({ posts }) {
  console.log(posts);
  return (
    <>
      {posts.map((post) => (
        <h1 key={post.id}>{post.title}</h1>
      ))}
    </>
  );
}

export const getStaticProps = async () => {
  const client = await MongoClient.connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
  });
  const db = client.db();
  const postCollection = db.collection("post");

  const posts = await postCollection.find().toArray();

  client.close();

  return {
    props: {
      posts: posts.map((post) => ({
        title: post.title,
        image: post.image,
        id: post._id.toString(),
      })),
    },
    revalidate: 10,
  };
};

export default PostedData;
