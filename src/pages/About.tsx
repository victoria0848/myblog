import { Link } from "react-router-dom";

export default function About() {
  return (
    <main>
      <Link to="/" className="back-btn">&larr; Tilbage </Link>
      <div className="full-article" >
        <h1>Om MyBlog</h1>
        <p>
          Velkommen til MyBlog! Dette er et personligt blog-site opbygget som en skoleopgave. 
          Alt indhold hentes dynamisk via GraphQL fra et headless CMS (Hygraph). Siden er 
          kodet i React med TypeScript og er fuldstændig mobilvenlig.
        </p>
      </div>
    </main>
  );
} 