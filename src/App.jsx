import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home';
import Header from './components/Header/Header'
import News from './components/News/News'
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
              <div className="routes">
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/news" element={<News />} />
                  <Route path="/archived" element={<News archived = { true }/>} />
              </Routes>
              </div>
    </div>
    </Router>
  );
}

export default App;
