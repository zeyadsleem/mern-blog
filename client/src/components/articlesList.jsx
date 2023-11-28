import { Link } from "react-router-dom";
import articles from "../content.js";

export default function ArticleList() {
  return (
    <>
      <h1>Articles</h1>
      {articles.map((article, key) => (
        <article key={key}>
          <Link to={`/articles/${article.name}`}>
            <h3>{article.title}</h3>
            <p>{article.content[0].substring(0, 150)}...</p>
          </Link>
        </article>
      ))}
    </>
  );
}
