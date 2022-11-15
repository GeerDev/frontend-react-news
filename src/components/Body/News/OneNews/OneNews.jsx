import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { updateArchived, deleteOneNews } from '../../../../features/news/newsSlice'

function OneNews({_id, title, category, updatedAt, archived}) {

  const dispatch = useDispatch()

  const archiveNews = (id_new) => {
    dispatch(updateArchived(id_new))
  }

  const deleteNews = (id_new) => {
    dispatch(deleteOneNews(id_new))
  }

  return (
    <>
    <Link to={`/newsdetail/${_id}`}>
    <div>Título: {title}</div>
    </Link>
    <div>Categoría: {category}</div>
    <div>Fecha: {updatedAt}</div>
    {archived ? <button onClick={() => deleteNews(_id)}>Delete</button> : <button onClick={() => archiveNews(_id)}>Archive</button>}
    </>
  )
}

export default OneNews