import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import './BookScreen.css';
import Header from "../component/Header";
import Footer from '../component/Footer';

function BookScreen() {

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [listData, setListData] = useState("");
  useEffect(() => {
    fetchDataRow();
  }, []);
 
   function fetchDataRow() {
    console.log("log123 659");
    fetch("https://api.vedscienceandmaths.com/api/category", {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + "2|e8U7SSdsCJ3X0YHmIwKQvkx5q2FtVxaizqOEbJvD",
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        // code here //
        // setData(data)
        setCategories(data)
        // setIsLoading(false)
        if (data.error) {
          alert('Error Password or Username', data); /*displays error message*/
        } else {
          if (data.status) {
          } else {
          }
          /*opens the target page while Id & password matches*/
        }
      })
      .catch(err => {
      });
  }
  const handleCategoryClick = (category) => {
    console.log("log123 --> ", category.name);
    if (!selectedCategory) {
      setSelectedCategory(category);
      setListData(category.name);
    } else {
      setSelectedCategory(!category);
      setListData(category.name);
    }

  };

  return (
    <>
    <div>
      < Header />
      {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <div>
        <i class="fa-brands fa-instagram fa-2xl"></i><br />
        <i class="fa-brands fa-facebook fa-2xl"></i>
      </div> */}
      <h1>Book Categories</h1>
      <div className="category-list">
        {categories.map(category => (
          <div class="row">
            <div className='btnColor'>
              <button
                className='btnColor'
                key={category.id} onClick={() => handleCategoryClick(category)}>
                {category.name}
                <div className='button-add'>
                  {(selectedCategory && listData === category.name) ? "-" : "+"}
                </div>
              </button>
            </div>
            {(selectedCategory && listData === category.name) && (
              <div className="book-list">
                <h2>{selectedCategory.name} Books</h2>
                <ul>
                  {selectedCategory.books.map(book => (
                    <li key={book.id}>
                      <a href={book.book} target="_blank" rel="noopener noreferrer">{book.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default BookScreen;

