import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'
import './Home.css'

function Home() {
  return (
    <div className="home">
      <img src={logo} alt="Logo News App" className='animate__animated animate__bounceIn'/>
      <h1 className='animate__animated animate__bounceInLeft'>Welcome to News App</h1>
      <p className='animate__animated animate__bounceInLeft'>The best site to consult the latest news</p>
      <Link to="/news">
      <button>Have a look!</button>
      </Link>
    </div>
  )
}

export default Home