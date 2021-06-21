import Card from "../Card";

function SingleArticle({ article }) {
  return (
    <div
      style={{
        maxWidth: "35%",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      }}
    >
      <Card>
        <h1>{article.title}</h1>
        <p>{article.body}</p>
      </Card>
    </div>
  );
}

export default SingleArticle;
