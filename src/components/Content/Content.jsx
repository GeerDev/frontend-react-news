import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import News from './News/News'

function Content({ archived }) {

  return (
    <>
    <Sidebar />
    <News archived = { archived }/>
    </>
  )
}

export default Content