import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { type BlogArticle } from "../types";

const HYGRAPH_ENDPOINT =
  "https://eu-west-2.cdn.hygraph.com/content/cmowr88b2008007v03ny07r70/master";

const query = `
{
  newsArticles(stage: PUBLISHED) {
    id
    title
    author
    category
    date
    image {
      url
    }
  }
}
`;

export default function Home() {
  const [articles, setArticles] = useState<BlogArticle[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("alle");

  useEffect(() => {
    fetch(HYGRAPH_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    })
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.data.newsArticles);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const categories = [
    "alle",
    "Krimi",
    "Teknologi",
    "Indland",
    "Kunst",
    "Sport",
    "Udland",
  ];

  const filteredArticles =
    selectedCategory === "alle"
      ? articles
      : articles.filter(
          (article) => article.category === selectedCategory
        );

  return (
    <main>
      <header>
        <h1>MyBlog</h1>

        <div className="filter-buttons">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </header>

      <div className="blog-grid">
        {filteredArticles.map((article) => (
          <article key={article.id} className="blog-card">
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

            <Link to={`/artikel/${article.id}`}>
              Læs mere
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}