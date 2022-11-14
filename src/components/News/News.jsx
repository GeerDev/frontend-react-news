import { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getNews } from '../../features/news/newsSlice.js'
import OneNews from './OneNews/OneNews'

function News({ archived }) {

const dispatch = useDispatch()
const { news } = useSelector( state => state.news )

useEffect(() => {
  dispatch(getNews())
},[])

  return (
    <div>
    {
      news.map(element => (
        element.archived === archived ?
        <OneNews 
            key= { element._id } 
            {...element}
            /> : null
      ))
    }
    </div>
  )
}

export default News