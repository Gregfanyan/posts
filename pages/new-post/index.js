import { MongoClient } from "mongodb";

import NewPostList from "../../components/NewPostList";

function PostedData({ posts }) {
  return (
    <>
      <NewPostList posts={posts} />
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
        description: post.description,
        id: post._id.toString(),
      })),
    },
    revalidate: 10,
  };
};

export default PostedData;
