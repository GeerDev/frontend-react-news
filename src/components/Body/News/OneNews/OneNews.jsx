import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { updateArchived, deleteOneNews } from '../../../../features/news/newsSlice'
import './OneNews.css'

function OneNews({_id, title, link, category, keywords, author, image_url, updatedAt, archived, archiveDate}) {

  const dispatch = useDispatch()

  const archiveNews = (id_new) => {
    dispatch(updateArchived(id_new))
  }

  const deleteNews = (id_new) => {
    dispatch(deleteOneNews(id_new))
  }

  const externalLink = ( url ) => {
    window.location.replace(url)
  }

  let location = useLocation()
  let currentLocation = location.pathname

  return (
    <div className="card animate__animated animate__fadeIn">
        <img src={image_url} alt={image_url}/>
        <div className="card_content">
        <Link to={`/newsdetail/${_id}`}>
          <h3>{title}</h3>
        </Link>
          <div className="categoryandauthor">
          <h4>Category: {category}</h4>
          <h4>Author: {author}</h4>
          </div>
          {currentLocation !== '/archived' ? <p><i>{updatedAt.slice(0,10)}</i></p> : null}
          {archiveDate ? (<p>Archived date: {archiveDate}</p>) : null}
          <div className="card_atribbutes animate__animated animate__fadeIn">
          {
            keywords ? keywords.map((elem,idx) => (
                <span key={idx} className="card_element">#{elem}</span>
              ))
            : null
          }
          </div>
          <div className="card_buttons">
          <button onClick={()=> externalLink(link) }>Go to the website</button>
          {archived ? <button onClick={() => deleteNews(_id)}>Delete</button> : <button onClick={() => archiveNews(_id)}>Archive</button>}
          </div>
        </div>
      </div>
  )
}

export default OneNews