import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true); // Yangi loading holati

  useEffect(() => {
    setLoading(true); // API chaqirishdan oldin loadingni yoqish
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.articles);
        setLoading(false); // API chaqirilgandan so‘ng loadingni o‘chirish
      })
      .catch(() => setLoading(false)); // Xatolik yuz bersa ham loading o‘chishi kerak
  }, [category]);

  return (
    <div className="container">
      {loading ? ( 
        <div className="text-center py-5">
          <span className="spinner-border text-primary"></span> {/* Bootstrap loading */}
          <p>Loading news...</p>
        </div>
      ) : (
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
        ))
      )}
    </div>
  );
};

export default NewsBoard;
