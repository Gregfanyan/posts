import ArticleItem from "../ArticleItem";
import Container from "../Container";

function ArticleList({ articles }) {
  return (
    <Container>
      {articles.map((article) => (
        <ArticleItem key={article.id} article={article} />
      ))}
    </Container>
  );
}

export default ArticleList;
