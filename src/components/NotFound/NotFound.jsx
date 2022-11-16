import image404 from '../../assets/NotFound.png'
import './NotFound.css'

const NotFound = () => {
    return (
      <div className='container404 animate__animated animate__fadeIn'>
        <img src={image404} alt="Image Not Found 404" />
      </div>
    )
  }
  
  export default NotFound