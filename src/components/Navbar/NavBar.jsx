import { Link } from "react-router-dom"

import logo from '../../assets/logo.png'

import './Navbar.css';

function Navbar() {
  return (
    <nav className = "navbar">

        <Link to="/home">
        <div className='logo'>
            <img src={logo} alt="Logo News App"/>
            <span className='logo_text'>News App</span>
        </div>
        </Link>

        <div className="list">
        <Link to="/home"><span>Home</span></Link>
        <Link to="/news"><span>News</span></Link>
        <Link to="/archived"><span>Archived</span></Link>
        </div> 
    </nav>
  )
}

export default Navbar