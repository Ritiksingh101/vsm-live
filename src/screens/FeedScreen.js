import Header from "../component/Header";
import './FeedStyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Footer from '../component/Footer';
import { useEffect, useState } from "react";
import axios from "axios";

const FeedScreen = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from the API
  const fetchData = async () => {
    try {
      const response = await axios.get('https://admin.vedscienceandmaths.com/feed');
      setData(response.data); //
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <div className="container mt-4">
        <h1 className="text-center mb-4">Feed Screen {JSON.stringify(data)}</h1>

        {/* Display loading or error messages */}
        {loading && <p className="text-center">Loading...</p>}
        {error && <p className="text-center text-danger">Error: {error}</p>}

        {/* Render feed items */}
        {!loading && !error && data.map((feed) => (
          <div 
            key={feed.id} 
            className="bg-white rounded-lg flex justify-between items-center border-t-2 border-b-2 mb-4 p-4"
          >
            <div className="flex flex-col items-start">
              <h3 className="font-semibold text-blue-500">{feed.title}</h3>
              <p className="text-gray-800 text-base font-medium leading-relaxed">
                {feed.description}
              </p>
            </div>
            <div className="w-20 h-20 rounded-[15px] overflow-hidden flex justify-center items-center">
              <img 
                src={feed.main_image}
                alt={feed.title} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default FeedScreen;


// import Header from "../component/Header";
// import './FeedStyle.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';

// import Footer from '../component/Footer';
// import { useEffect, useState } from "react";

// import axios from "axios";
// import data from '../data/data.json'
// import { json } from "react-router-dom";




// const FeedScreen = () => {

//   // const [feed, setFeed] = useState([])
//   // useEffect(() => { setFeed(data) }, [])



//    useEffect(()=>{fetchData()},[])
//    const [data, setData] = useState([]);
//    const [loading, setLoading] = useState(true);
//    const [error, setError] = useState(null);




//   //  get data from api


//   // Fetch data from the API
//   const fetchData = async () => {
//     try {
//       const response = await axios.get('https://admin.vedscienceandmaths.com/feed');
//       setData(response.data); // 
//       setLoading(false);
//     } catch (err) {
//       setError(err.message);
//       setLoading(false);
//     }
//   };





//   return (
//     <>
//       <Header />
//       <div className="container mt-4">
//         <h1 className="text-center mb-4">Feed Screen {JSON.stringify(data)} </h1>

//         {data.map((i) => (

//           <div className="  bg-white  rounded-lg flex justify-between  items-center border-t-2 border-b-2">
//             <div className="flex flex-col items-center mb-4">
//               <h3 className=" font-semibold text-blue-500">{i.title}</h3>
//               <label className="text-gray-800 text-base font-medium leading-relaxed">
//                {i.description}
//               </label>
//             </div>
            
//               <div className="w-20 h-20 rounded-[15px] overflow-hidden flex justify-center items-center">
//                 {/* Placeholder for an icon/image */}
//                 <span className="">
//                   <img src={i.main_image}></img>
//                 </span>
//               </div>
          
//           </div>
//         ))}





//       </div>
//       <Footer />
//     </>
//   );
// };

// export default FeedScreen;