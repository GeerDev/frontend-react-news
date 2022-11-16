import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getNewsById } from '../../features/news/newsSlice'
import './NewsDetail.css'

function NewsDetail() {

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { oneNews } = useSelector( state => state.news )

  useEffect(() => {
    dispatch(getNewsById(id));
  }, []);

  const { title, content, author, source_id, date, description, image_url } = oneNews

  return (
    <div className="detail_card">
      <img src={image_url} alt={image_url}/>
      <h1>{ title }</h1>
      <h3>{ description }</h3>
      <div className="components">
        <h4><strong>Source:</strong> { source_id }</h4>
        <h4><strong>Author:</strong> { author }</h4>
        {date && <h4><strong>Date:</strong> { date.slice(0,10) }</h4>}
      </div>
      <p>{ content }</p>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  )
}

export default NewsDetail