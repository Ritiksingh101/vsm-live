// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './BookScreen.css';
// import Header from "../component/Header";
// import Footer from '../component/Footer';

// function BookScreen() {
//   const [categories, setCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchDataRow();
//   }, []);

//   function sanitizeUrl(url) {
//     return url.replace('/books/books/', '/books/');
//   }

//   function fetchDataRow() {
//     fetch("https://api.vedscienceandmaths.com/api/category", {
//       method: 'GET',
//       headers: {
//         Authorization: 'Bearer ' + "2|e8U7SSdsCJ3X0YHmIwKQvkx5q2FtVxaizqOEbJvD",
//         'Content-Type': 'application/json',
//       },
//     })
//       .then(response => response.json())
//       .then(data => {
//         // Sanitize the book URLs
//         const sanitizedData = data.map(category => ({
//           ...category,
//           books: category.books.map(book => ({
//             ...book,
//             book: sanitizeUrl(book.book),
//           })),
//         }));
//         setCategories(sanitizedData);
//         if (data.error) {
//           alert('Error Password or Username', data);
//         }
//       })
//       .catch(err => {
//         console.error(err);
//       });
//   }

//   const handleCategoryClick = (category) => {
//     setSelectedCategory(selectedCategory === category ? null : category);
//   };

//   const handleBookClick = (book) => {
//     navigate('/pdf-viewer', { state: { bookName: book.name, pdfUrl: book.book } });
//   };

//   return (
//     <>
//       <Header />
//       <div className="container mt-4">
//         <h1 className="text-center mb-4">Book Categories</h1>
//         <div className="category-list">
//           {categories.map(category => (
//             <div className="category-item" key={category.id}>
//               <button
//                 className={`btnColor ${selectedCategory === category ? 'active' : ''}`}
//                 onClick={() => handleCategoryClick(category)}
//               >
//                 {category.name}
//                 <div className='button-add'>
//                   {selectedCategory === category ? "-" : "+"}
//                 </div>
//               </button>
//               {selectedCategory === category && (
//                 <div className="book-list">
//                   <h2>{category.name} Books</h2>
//                   <ul>
//                     {category.books.map(book => (
//                       <li key={book.id}>
//                         <button  onClick={() => handleBookClick(book)}>
//                           {book.name}
//                         </button>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default BookScreen;




// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { fetchCategories } from '../redux/slices/bookSlice';
// import './BookScreen.css';
// import Header from "../component/Header";
// import Footer from '../component/Footer';

// function BookScreen() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { categories, status, error } = useSelector(state => state.books);
//   const [selectedCategory, setSelectedCategory] = useState(null);

//   useEffect(() => {
//     if (status === 'idle') {
//       dispatch(fetchCategories());
//     }
//     console.log("categories ", categories);
//   }, [status, dispatch]);

//   const handleCategoryClick = (category) => {
//     setSelectedCategory(selectedCategory === category ? null : category);
//   };

//   const handleBookClick = (book) => {
//     console.log('Book Clicked:', book);
//     navigate('/pdf-viewer', { state: { bookName: book.name, pdfUrl: book.book } });
//   };

//   // const handleBookClick = (book) => {
//   //   console.log('Book Clicked:', book);
//   //   const sanitizedUrl = book.book.replace('/books/books/', '/books/');
//   //   console.log('Sanitized URL:', sanitizedUrl);
//   //   if (sanitizedUrl) {
//   //     navigate('/pdf-viewer', { state: { bookName: book.name, pdfUrl: sanitizedUrl } });
//   //   }
//   //   else {
//   //     console.error('Failed to navigate, URL is invalid:', sanitizedUrl);
//   //     alert('Failed to open the book. The URL is invalid.');
//   //   }
//   // };

//   return (
//     <>
//       <Header />
//       <div className="container mt-4">
//         <h1 className="text-center mb-4">Book Categories</h1>
//         <div className="category-list">
//           {status === 'loading' && <p>Loading...</p>}
//           {status === 'failed' && <p>Error: {error}</p>}
//           {status === 'succeeded' && categories.map(category => (
//             <div className="category-item" key={category.id}>
//               <button
//                 className={`btnColor ${selectedCategory === category ? 'active' : ''}`}
//                 onClick={() => handleCategoryClick(category)}
//               >
//                 {category.name}
//                 <div className='button-add'>
//                   {selectedCategory === category ? "-" : "+"}
//                 </div>
//               </button>
//               {selectedCategory === category && (
//                 <div className="book-list">
//                   <h2>{category.name} Books</h2>
//                   <ul>
//                     {category.books.map(book => (
//                       <li key={book.id}>
//                         <button onClick={() => handleBookClick(book)}>
//                           {book.name}
//                         </button>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default BookScreen;





import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchCategories } from '../redux/slices/bookSlice';
import './BookScreen.css';
import Header from "../component/Header";
import Footer from '../component/Footer';
import { GrSubtractCircle } from "react-icons/gr";
import { MdAddCircleOutline } from "react-icons/md";

function BookScreen() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { categories, status, error } = useSelector(state => state.books);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCategories());
    }
    console.log("Categories fetched: ", categories);
  }, [status, dispatch]);

  const handleCategoryClick = (category) => {
    console.log('Category Clicked:', category);
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  const handleBookClick = (book) => {
    console.log('Book Clicked:', book);
    navigate('/pdf-viewer', { state: { bookName: book.name, pdfUrl: book.book } });
  };

  return (
    <>
      <Header />
      <div className="container mt-4">
        <h1 className="text-center mb-5 font-semibold text-5xl">Book Categories</h1>
        <div className="category-list flex flex-col items-center text-center">
          {status === 'loading' && <p>Loading...</p>}
          {status === 'failed' && <p>Error: {error}</p>}

          {
            status === 'succeeded'
            &&
            categories.map(category => (
              <div className="w-full max-w-[700px] mb-5" key={category.id}>
                <button
                  // className={`w-full px-5 py-2.5 bg-[#eba858f5] text-black
                  //   text-2xl uppercase rounded-[40px] flex justify-between items-center
                  //   ${selectedCategory === category ? 'bg-[#fabe75f5]' : 'hover:bg-[#d38b34f5]'
                  //   }`
                  // }
                  className={`w-full px-5 py-2.5 bg-[#eba858f5] text-black 
                    uppercase rounded-[40px] flex justify-between items-center
                    ${selectedCategory === category ? 'bg-[#fabe75f5]' : 'hover:bg-[#d38b34f5]'}
                    text-base sm:text-lg md:text-xl lg:text-2xl`}
                  onClick={() => handleCategoryClick(category)}
                >

                  {category.name}

                  <div className='font-bold'>
                    {selectedCategory === category ? <GrSubtractCircle /> : <MdAddCircleOutline />}
                  </div>
                </button>

                {
                  selectedCategory === category
                  &&
                  (
                    <div className="book-list mt-4">
                      <h2 className='my-3 text-center text-black'>{category.name} Books</h2>
                      <ul className='list-none'>
                        {category.books.map(book => (
                          <li
                            // className="w-full px-4 py-2.5 bg-[#fec98af5] cursor-pointer 
                            //   text-2xl uppercase rounded-[35px] my-3 text-gray-900 
                            //   text-center hover:bg-[#e1a55ff5] hover:underline"
                            className={`w-full px-4 py-2 bg-[#fec98af5] cursor-pointer 
                              uppercase rounded-[35px] my-3 text-gray-900 text-center 
                              text-sm sm:text-base md:text-lg lg:text-xl 
                              hover:bg-[#e1a55ff5] hover:underline 
                              sm:hover:bg-[#e1a55ff5] sm:hover:underline
                              md:hover:bg-[#e1a55ff5] md:hover:underline
                              lg:hover:bg-[#e1a55ff5] lg:hover:underline`
                            }
                  
                            key={book.id}
                          >
                            <button
                              className="w-full h-full bg-transparent hover:underline"
                              onClick={() => handleBookClick(book)}
                            >
                              {book.name}
                            </button>
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
