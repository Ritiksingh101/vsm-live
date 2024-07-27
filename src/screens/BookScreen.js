import React, { useState, useEffect } from 'react';
import './BookScreen.css';
import Header from "../component/Header";
import Footer from '../component/Footer';

function BookScreen() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    fetchDataRow();
  }, []);

  function sanitizeUrl(url) {
    return url.replace('/books/books/', '/books/');
  }

  function fetchDataRow() {
    fetch("https://api.vedscienceandmaths.com/api/category", {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + "2|e8U7SSdsCJ3X0YHmIwKQvkx5q2FtVxaizqOEbJvD",
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        // Sanitize the book URLs
        const sanitizedData = data.map(category => ({
          ...category,
          books: category.books.map(book => ({
            ...book,
            book: sanitizeUrl(book.book),
          })),
        }));
        setCategories(sanitizedData);
        if (data.error) {
          alert('Error Password or Username', data);
        }
      })
      .catch(err => {
        console.error(err);
      });
  }

  const handleCategoryClick = (category) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  return (
    <>
      <Header />
      <div className="container mt-4">
        <h1 className="text-center mb-4">Book Categories</h1>
        <div className="category-list">
          {categories.map(category => (
            <div className="category-item" key={category.id}>
              <button
                className={`btnColor ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => handleCategoryClick(category)}
              >
                {category.name}
                <div className='button-add'>
                  {selectedCategory === category ? "-" : "+"}
                </div>
              </button>
              {selectedCategory === category && (
                <div className="book-list">
                  <h2>{category.name} Books</h2>
                  <ul>
                    {category.books.map(book => (
                      <li key={book.id}>
                        <a href={book.book} target="_blank" rel="noopener noreferrer">
                          {book.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default BookScreen;
