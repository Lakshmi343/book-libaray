
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Book.css";

const Book = () => {
  const baseUrl = "http://localhost:4000/api/book/getallbooks";
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        let url = baseUrl;
        if (selectedCategory) {
          url += `?category=${encodeURIComponent(selectedCategory)}`;
        }

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.statusText}`);
        }

        const jsonData = await response.json();
        setData(jsonData.books || []);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch books. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [selectedCategory]);

  return (
    <div className="book-container">
      <h1>Books</h1>
      <p>
        Explore the collection of books fetched from a MongoDB database using
        Node.js and Express.
      </p>

      <Link to="/createbook" className="add-book-button">
        + Add New Book
      </Link>

      <h2>Filter by Category</h2>
      <div className="filters">
        <label htmlFor="categories">Categories</label>
        <select
          id="categories"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All</option>
          <option value="romance">Romance</option>
          <option value="science">Science</option>
          <option value="crime">Crime</option>
          <option value="food">Food</option>
          <option value="adventure">Adventure</option>
          <option value="thriller">Thriller</option>
          <option value="fiction">Fiction</option>
          <option value="other">Other</option>
        </select>
      </div>

      {isLoading ? (
        <p>Loading books...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : (
        <ul className="books">
          {data.length > 0 ? (
            data.map((item) => (
              <li key={item._id} className="book-item">
                <article className="card">
                  <Link to={`/books/${item.slug}`}>
                    <header>
                      <h3>{item.title}</h3>
                    </header>
                    <div className="book-image-container">
                      <img
                        src={`http://localhost:4000/uploads/${item.bookImage}`}
                        alt={item.title}
                        className="book-image"
                      />
                    </div>
                    <footer>
                      <p>{item.author}</p>
                    </footer>
                  </Link>
                </article>
              </li>
            ))
          ) : (
            <p>No books found in this category.</p>
          )}
        </ul>
      )}
    </div>
  );
};

export default Book;
