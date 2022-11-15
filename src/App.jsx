import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home';
import Navbar from './components/Navbar/NavBar'
import Body from './components/Body/Body';
import NewsDetail from './components/NewsDetail/NewsDetail';
import "antd/dist/antd.css";

function App() {
  return (
    <Router>
      <Navbar />
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/news" element={<Body archived = { false }/>} />
                  <Route path="/archived" element={<Body archived = { true }/>} />
                  <Route path="/newsdetail/:id" element={<NewsDetail />} />
              </Routes>
    </Router>
  );
}

export default App;
