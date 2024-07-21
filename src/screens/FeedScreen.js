// import React, { useState } from 'react';
// import Header from "../component/Header";
// import './FeedStyle.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import data from '../data/data';

// const FeedScreen = () => {
//   const [selectedCategory, setSelectedCategory] = useState('All');

//   const categories = ['All', ...new Set(data.feeds.map(feed => feed.category))];

//   const filteredFeeds = selectedCategory === 'All'
//     ? data.feeds
//     : data.feeds.filter(feed => feed.category === selectedCategory);

//   return (
//     <div>
//       <Header />
//       <h1 className="my-4">Feed Screen</h1>

//       <div className="d-flex justify-content-center mb-4">
//         <div className="btn-group">
//           {categories.map((category, index) => (
//             <button
//               key={index}
//               className={`btn ${selectedCategory === category ? 'btn-primary' : 'btn-secondary'}`}
//               onClick={() => setSelectedCategory(category)}
//             >
//               {category}
//             </button>
//           ))}
//         </div>
//       </div>

//       <div className="container">
//         <div className="row">
//           {filteredFeeds.map((feed, index) => (
//             <div className="col-md-4 mb-4" key={index}>
//               <div className="card h-100">
//                 <img src={feed.image} alt='news-img' className="card-img-top" />
//                 <div className="card-body">
//                   <h5 className="card-title">{feed.category}</h5>
//                   <p className="card-text"><b>{feed.title}<br />{feed.description}</b></p>
//                   <ul>
//                     {feed.details.map((detail, i) => (
//                       <li key={i}>{detail}</li>
//                     ))}
//                   </ul>
//                   <div className='icons'>
//                     <i className="fa-solid fa-message"></i>
//                     <i className="fa-solid fa-bookmark"></i>
//                     <i className="fa-solid fa-circle-down"></i>
//                     <i className="fa-solid fa-share-nodes"></i>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeedScreen;



import React, { useState } from 'react';
import Header from "../component/Header";
import './FeedStyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import data from '../data/data';

const FeedScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(data.feeds.map(feed => feed.category))];

  const filteredFeeds = selectedCategory === 'All'
    ? data.feeds
    : data.feeds.filter(feed => feed.category === selectedCategory);

  return (
    <div>
      <Header />
      <h1 className="my-4">Feed Screen</h1>

      <div className="d-flex justify-content-center mb-4">
        <div className="btn-group">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`btn ${selectedCategory === category ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="row">
          {filteredFeeds.map((feed, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100">
                <img src={feed.image} alt='news-img' className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{feed.category}</h5>
                  <p className="card-text"><b>{feed.title}<br />{feed.description}</b></p>
                  <ul>
                    {feed.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                  <div className='icons'>
                    <i className="fa-solid fa-message"></i>
                    <i className="fa-solid fa-bookmark"></i>
                    <i className="fa-solid fa-circle-down"></i>
                    <i className="fa-solid fa-share-nodes"></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeedScreen;
