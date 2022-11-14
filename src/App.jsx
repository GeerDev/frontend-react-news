import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home';
import Header from './components/Header/Header'
import Content from './components/Content/Content';
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
                  <Route path="/news" element={<Content archived = { false }/>} />
                  <Route path="/archived" element={<Content archived = { true }/>} />
              </Routes>
              </div>
    </div>
    </Router>
  );
}

export default App;
