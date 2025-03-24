import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch news");
        }
        return response.json();
      })
      .then((data) => {
        setArticles(data.articles);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [category]);

  return (
    <div className="container">
      {loading && (
        <div className="text-center py-5">
          <span className="spinner-border text-primary"></span>
          <p>Loading news...</p>
        </div>
      )}

      {error && <p className="text-danger text-center">{error}</p>}

      {!loading &&
        !error &&
        articles.map((news, index) => (
          <NewsItem
            key={index}
            src={news.urlToImage}
            author={news.author}
            title={news.title}
            description={news.description}
            url={news.url}
            publishedAt={news.publishedAt}
          />
        ))}
    </div>
  );
};

export default NewsBoard;
