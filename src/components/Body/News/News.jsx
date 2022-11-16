import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom';
import { getNews, reset } from '../../../features/news/newsSlice.js'
import { notification} from "antd";
import OneNews from './OneNews/OneNews'

function News({ archived }) {

const dispatch = useDispatch()
const { news, message } = useSelector( state => state.news )

let location = useLocation()
let currentLocation = location.pathname

useEffect(() => {
  dispatch(getNews())
},[currentLocation])

useEffect(() => {
  if(message) {
    notification.success({ message: "Let's go", description: message });
    dispatch(reset())
  }
}, [message]);

const newsArchived = news.filter(element => element.archived)

  return (
    <div>
    {
      news.length === 0 ? <p>No news here yet...</p> : currentLocation === "/archived" && newsArchived.length === 0 ? <p>No news archived here yet...</p> :
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