import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'
import './Home.css'

function Home() {
  return (
    <div className="home">
      <img src={logo} alt="Logo News App"/>
      <h1>Welcome to <span className='typewriter'>News App</span></h1>
      <p>The best site to consult the latest news</p>
      <Link to="/news">
      <button>Have a look!</button>
      </Link>
    </div>
  )
}

export default Home