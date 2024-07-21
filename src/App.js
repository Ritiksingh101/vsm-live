// import logo from './logo.svg';
import './App.css';
import BookScreen from './screens/BookScreen';
import FeedScreen from './screens/FeedScreen';
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Counter } from './screens/Counter';
import HomeScreen from './screens/HomeScreen';

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
        <Route path="/counter" element={<Counter/>} />
      </Routes>
    </Router>

  );
}

export default App;
