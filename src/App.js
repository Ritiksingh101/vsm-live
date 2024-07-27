// import logo from './logo.svg';
import './App.css';
import BookScreen from './screens/BookScreen';
import FeedScreen from './screens/FeedScreen';
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import PdfViewer from './screens/PdfViewer'

function App() {
  return (
      <Router>
      <Routes>
        <Route path="/" element={<HomeScreen/>} />
        {/* <Route path="/" element={<BookScreen />} /> */}
        <Route path="/feed" element={<FeedScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/books" element={<BookScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
        <Route path="/pdf-viewer" element={<PdfViewer />} />
      </Routes>
    </Router>

  );
}

export default App;
