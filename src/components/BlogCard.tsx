import { Link } from "react-router-dom";
import { type BlogArticle } from "../types";

type BlogCardProps = {
  article: BlogArticle;
};

export default function BlogCard({ article }: BlogCardProps) {
  return (
    <article className="blog-card">
      <img
        src={article.image?.url}
        alt={article.title}
      />

      <h2>{article.title}</h2>

      <p>
        <strong>Forfatter:</strong> {article.author}
      </p>

      <p>
        <strong>Dato:</strong> {article.date}
      </p>

      <p>
        <strong>Kategori:</strong> {article.category}
      </p>

      <Link
        to={`/artikel/${article.id}`}
        className="read-more-btn"
      >
        Læs mere
      </Link>
    </article>
  );
}