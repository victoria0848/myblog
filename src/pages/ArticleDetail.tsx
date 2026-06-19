import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { type BlogArticle } from "../types";

const HYGRAPH_ENDPOINT =
  "https://eu-west-2.cdn.hygraph.com/content/cmowr88b2008007v03ny07r70/master";

const singleQuery = `
query GetSingleArticle($id: ID!) {
  newsArticle(where: { id: $id }, stage: PUBLISHED) {
    title
    author
    category
    date
    image {
      url
    }
    content {
      text
    }
  }
}
`;

export default function ArticleDetail() {
  const { id } = useParams<{ id: string }>();

  const [article, setArticle] = useState<BlogArticle | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    fetch(HYGRAPH_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: singleQuery,
        variables: { id },
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setArticle(data.data.newsArticle);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Henter artikel...</p>;
  }

  if (!article) {
    return <p>Øv! Artiklen blev ikke fundet</p>;
  }

  return (
    <main className="article-page">
      <Link to="/" className="back-btn">&larr; Tilbage </Link>

      <article className="full-article">
        <p className="category-badge">{article.category}</p>

        <h1>{article.title}</h1>

        <p className="meta">
          Skrevet af {article.author} - {article.date}
        </p>

        <img
          src={article.image?.url}
          alt={article.title}
          className="detail-img"
        />

        <p className="article-body">
          {article.content?.text}
        </p>
      </article>
    </main>
  );
}