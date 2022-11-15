import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import News from './News/News'
import AddNews from './AddNews/AddNews'
import './Body.css';

function Body({ archived }) {

  return (
    <main className='body-content'>
      <div className='addandsearch'>
        <AddNews />
        <Sidebar />
      </div>
    <News archived = { archived }/>
    </main>
  )
}

export default Body