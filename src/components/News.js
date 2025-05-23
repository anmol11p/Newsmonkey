import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import newsData from "../api/newData.json";

const News = () => {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [country, setCountry] = useState("in");
  const [category, setCategory] = useState("sports");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const pageSize = 6;

  useEffect(() => {
    try {
      // Validate data structure
      const validatedData = newsData.map((article, index) => ({
        ...article,
        id: index + 1, // Add unique ID
        category: article.category?.toLowerCase() || "general",
        country: article.country?.toLowerCase() || "us",
      }));

      setArticles(validatedData);
      setError(null);
    } catch (err) {
      setError("Failed to load news data. Please try again later.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const filtered = articles.filter(
      (item) =>
        item.country === country.toLowerCase() &&
        item.category === category.toLowerCase()
    );
    setFilteredArticles(filtered);
    setPage(1);
  }, [articles, country, category]);

  const startIndex = (page - 1) * pageSize;
  const currentArticles = filteredArticles.slice(
    startIndex,
    startIndex + pageSize
  );
  const maxPages = Math.ceil(filteredArticles.length / pageSize) || 1;

  if (loading) {
    return <div className="text-center my-4">Loading news...</div>;
  }

  if (error) {
    return <div className="alert alert-danger text-center">{error}</div>;
  }

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Top Headlines</h2>

      {/* Filters */}
      <div className="row mb-4">
        <div className="col-md-6 mb-3">
          <select
            className="form-select"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="in">India</option>
            <option value="us">USA</option>
            <option value="uk">UK</option>
            <option value="de">Germany</option>
            <option value="au">Australia</option>
          </select>
        </div>
        <div className="col-md-6 mb-3">
          <select
            className="form-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="sports">Sports</option>
            <option value="entertainment">Entertainment</option>
            <option value="defense">Defense</option>
            <option value="technology">Technology</option>
            <option value="health">Health</option>
          </select>
        </div>
      </div>

      {/* News Cards */}
      <div className="row">
        {currentArticles.length > 0 ? (
          currentArticles.map((article) => (
            <div className="col-md-4 mb-4" key={article.id}>
              <NewsItem
                title={article.title}
                description={article.description}
                imageUrl={article.urlToImage}
                newsurl={article.url}
              />
            </div>
          ))
        ) : (
          <div className="col-12 text-center">
            <p>No articles found for the selected filters.</p>
          </div>
        )}
      </div>

      {/* Pagination */}
      {currentArticles.length > 0 && (
        <div className="d-flex justify-content-between my-4">
          <button
            className="btn btn-dark"
            disabled={page <= 1}
            onClick={() => setPage(page - 1)}
          >
            &laquo; Previous
          </button>
          <span className="align-self-center">
            Page {page} of {maxPages}
          </span>
          <button
            className="btn btn-dark"
            disabled={page >= maxPages}
            onClick={() => setPage(page + 1)}
          >
            Next &raquo;
          </button>
        </div>
      )}
    </div>
  );
};

export default News;
