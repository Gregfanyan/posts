import { articles } from "../../../data";

export default function handler({ query: { id } }, res) {
  const filteredData = articles.filter((article) => article.id === id);

  if (filteredData.length > 0) {
    res.status(200).json(filteredData[0]);
  } else {
    res.status(404).json({ message: `article with id of ${id} is not found` });
  }
}
