import React, { useEffect, useState } from "react";

function useArticles(search, data) {
  const [filteredArticle, setFilteredArticle] = useState([]);

  useEffect(() => {
    const filtered = data.filter((article) =>
      article.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredArticle(filtered);
  }, [search]);

  return [filteredArticle];
}

export default useArticles;
