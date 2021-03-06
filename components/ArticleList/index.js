import React, { useState, useEffect } from "react";

import ArticleItem from "../ArticleItem";
import Container from "../Container";
import useArticles from "../../hooks/useArticles";

function ArticleList({ articles }) {
  const [search, setSearch] = useState("");
  const [filteredArticle] = useArticles(search, articles);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem",
          width: "100%",
        }}
      >
        <input
          placeholder="Search Article"
          value={search}
          onChange={handleChange}
          style={{
            width: "40%",
            padding: "12px 20px",
            margin: "20px 0",
            boxSizing: "border-box",
            transition: "0.5s",
            borderRadius: "20px",
            border: "none",
            boxShadow: "0px 5px 20px rgb(153, 176, 201)",
            outline: "none",
          }}
        />
      </div>

      <Container>
        {filteredArticle.map((article) => (
          <ArticleItem key={article.id} article={article} />
        ))}
      </Container>
    </div>
  );
}

export default ArticleList;
