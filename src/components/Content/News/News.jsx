import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom';
import { getNews } from '../../../features/news/newsSlice.js'
import OneNews from './OneNews/OneNews'

function News({ archived }) {

const dispatch = useDispatch()
const { news } = useSelector( state => state.news )

let location = useLocation()
let changeLocation = location.pathname

useEffect(() => {
  dispatch(getNews())
},[changeLocation])

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