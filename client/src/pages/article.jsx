import { useParams } from "react-router-dom";
import articles from "../content.js";
import NotFound from "./404.jsx";

export default function Articale() {
  const { articleId } = useParams();
  const article = articles.find(article => article.name === articleId)

  if (!article) {
    return <NotFound />
  }

  return (
    <>
      <h1>{article.title}</h1>
      {article.content.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </>
  )
}
