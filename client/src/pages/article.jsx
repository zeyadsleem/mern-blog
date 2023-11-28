import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import articles from "../content.js";
import NotFound from "../pages/404.jsx";

export default function Articale() {
  const { articleId } = useParams();
  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

  useEffect(() => {
    const fetchArticleInfo = async () => {
      const result = await fetch(`/api/articles/${name}`);
      const body = await result.json();
      setArticleInfo(body);
    };

    fetchArticleInfo();
  }, []);

  const article = articles.find((article) => article.name === articleId);
  if (!article) {
    return <NotFound />;
  }

  return (
    <>
      <h1>{article.title}</h1>
      <p>this article has {articleInfo.upvotes} upvotes</p>
      {article.content.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </>
  );
}
