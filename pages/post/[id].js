import { MongoClient, ObjectId } from "mongodb";

function SinglePost({ postData }) {
  return <div>{postData.description}</div>;
}

export const getStaticPaths = async () => {
  const client = await MongoClient.connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
  });
  const db = client.db();
  const postCollection = db.collection("post");

  const posts = await postCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: "blocking",
    paths: posts.map((post) => ({
      params: {
        postId: post._id.toString(),
      },
    })),
  };
};

export const getStaticProps = async (context) => {
  const postId = context.params.postId;

  const client = await MongoClient.connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
  });
  const db = client.db();
  const postCollection = db.collection("post");

  const selectedPost = await postCollection.findOne({
    _id: ObjectId(postId),
  });

  client.close();

  return {
    props: {
      postData: {
        id: selectedPost._id.toString(),
        image: selectedPost.image,
        title: selectedPost.title,
        description: selectedPost.description,
      },
    },
    revalidate: 10,
  };
};

export default SinglePost;
