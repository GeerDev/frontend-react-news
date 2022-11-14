import { useDispatch } from "react-redux";
import { updateArchived } from '../../../features/news/newsSlice'

function OneNews({_id, title, category, archived}) {

  const dispatch = useDispatch()

  const archiveNews = (id_new) => {
    dispatch(updateArchived(id_new))
  }

  return (
    <>
    <div>Título: {title}</div>
    <div>Categoría: {category}</div>
    {archived ? <button>Delete</button> : <button onClick={() => archiveNews(_id)}>Archive</button>}
    </>
  )
}

export default OneNews