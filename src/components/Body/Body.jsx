import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import News from './News/News'
import AddNews from './AddNews/AddNews'
import './Body.css';

function Body({ archived }) {

  return (
    <main className='body-content'>
    <AddNews />
    <Sidebar />
    <News archived = { archived }/>
    </main>
  )
}

export default Body