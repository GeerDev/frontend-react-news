import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home';
import Navbar from './components/Navbar/NavBar'
import Footer from './components/Footer/Footer';
import Body from './components/Body/Body';
import NewsDetail from './components/NewsDetail/NewsDetail';
import NotFound from './components/NotFound/NotFound';
import "antd/dist/antd.css";

function App() {
  return (
    <Router>
      <div className='app'>
      <Navbar />
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/news" element={<Body archived = { false }/>} />
                  <Route path="/archived" element={<Body archived = { true }/>} />
                  <Route path="/newsdetail/:id" element={<NewsDetail />} />
                  <Route path="*" element={ <NotFound />  } />
              </Routes>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
