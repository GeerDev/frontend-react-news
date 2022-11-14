import { Link } from "react-router-dom"

function Header() {
  return (
    <ul>
    <Link to="/home"><li>Home</li></Link>
    <Link to="/news"><li>News</li></Link>
    <Link to="/archived"><li>Archived</li></Link>
    </ul> 
  )
}

export default Header