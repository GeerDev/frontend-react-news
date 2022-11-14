import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import News from './News/News'
import AddNews from './AddNews/AddNews'

function Content({ archived }) {

  return (
    <>
    <AddNews />
    <Sidebar />
    <News archived = { archived }/>
    </>
  )
}

export default Content