import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getNewsById } from '../../features/news/newsSlice'

function NewsDetail() {

  const { id } = useParams();
  const dispatch = useDispatch();
  const { oneNews } = useSelector( state => state.news )

  useEffect(() => {
    dispatch(getNewsById(id));
  }, []);

  const { title } = oneNews

  return (
    <div>{ title }</div>
  )
}

export default NewsDetail