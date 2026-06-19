import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ArticleDetail from "./pages/ArticleDetail";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artikel/:id" element={<ArticleDetail />} />
          <Route path="/om" element={<About />} />
        </Routes>

        {/* Footer */}
        <footer>
          <p>&copy; 2026 MyBlog.</p>
          <div className="footer-links">
            <a href="/om">Om os</a> | Med dig siden 2026
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
