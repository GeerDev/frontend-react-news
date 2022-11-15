import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getNewsById } from '../../features/news/newsSlice'

function NewsDetail() {

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { oneNews } = useSelector( state => state.news )

  useEffect(() => {
    dispatch(getNewsById(id));
  }, []);

  const { title } = oneNews

  return (
    <div>
    <button onClick={() => navigate(-1)}>Go back 1 Page</button>
    <div>{ title }</div>
    </div>
  )
}

export default NewsDetail