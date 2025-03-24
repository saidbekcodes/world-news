const NewsItem = ({ src, title, description, url, publishedAt }) => {

  return (
    <article className="row g-0 mb-4 bg-body-tertiary shadow-sm rounded">
      <div className="col-md-4 mb-md-0 p-md-3">
        <img src={src || "https://via.placeholder.com/150"} loading="lazy"  style={{height: '12rem'}} className="w-100 rounded" alt="News-image" />
      </div>
      <div className="col-md-8 p-3 ps-md-0">
        <a href={url} className="text-decoration-none" rel="noopener noreferrer" target="_blank">
          <h5 className="card-title text-dark mb-1">{title}</h5>
        </a>
        <p>{description || "No description available"}</p>
        <small className="d-block text-secondary mb-3">{new Date(publishedAt).toLocaleString()}</small>
      </div>
    </article>
  );
};

export default NewsItem;
