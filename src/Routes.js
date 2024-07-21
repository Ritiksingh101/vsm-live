// import logo from './logo.svg';
import './App.css';
import MainComponent from "./screens/MainComponent";
import Home from './screens/AboutScreen';
import BookScreen from './screens/BookScreen';
import FeedScreen from './screens/FeedScreen';
import AboutScreen from './screens/AboutScreen'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function Route() {
  return (
      <Router>
      <Routes>
        <Route path="/" element={<BookScreen />} />
        <Route path="/home" element={<Home />} />
        <Route path="/feed" element={<FeedScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/books" element={<BookScreen />} />
      </Routes>
    </Router>

  );
}

export default Route;
