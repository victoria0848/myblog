import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ArticleDetail from "./pages/ArticleDetail";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artikel/:id" element={<ArticleDetail />} />
        </Routes>

        {/* Footer */}
        <footer>
          <p>&copy; 2026 MyBlog.</p>
          <div className="footer-links">
            <a href="#om">Om os</a> | <a href="#kontakt">Kontakt</a>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
