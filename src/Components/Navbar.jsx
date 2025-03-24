import { useState } from "react";

const Navbar = ({ setCategory }) => {
  const [activeCategory, setActiveCategory] = useState("general");

  const handleCategoryClick = (category) => {
    setCategory(category);
    setActiveCategory(category);
  };

  const categories = ["general", "health", "technology", "science", "business", "sports", "entertainment"]

  return (
    <nav className="navbar px-2 mb-5 navbar-expand-md bg-white border-bottom">
      <div className="container-fluid">
        <a className="navbar-brand fw-semibold" href="/">
          <span className="badge bg-gradient text-bg-dark fs-5">News</span>
        </a>
        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse mt-md-0 mt-3" id="navbarNav">
        <ul style={{ cursor: 'pointer' }} className="navbar-nav ms-auto column-gap-4 row-gap-2 fw-medium">
            {categories.map((category) => (
              <li key={category} onClick={() => handleCategoryClick(category)}
              className={`nav-link ${activeCategory === category ? "text-dark" : ""}`}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
