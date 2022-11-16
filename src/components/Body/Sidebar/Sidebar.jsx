import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories, getNewsByCategory, searchByTitle } from '../../../features/news/newsSlice'
import { Radio, Input } from 'antd';
const { Search } = Input

function Sidebar() {

  const [dataCategory, setDataCategory] = useState("allcategories");
  const [dataTitle, setDataTitle] = useState("")

  const dispatch = useDispatch()
  const { categories } = useSelector( state => state.news )

  const onSearch = () => {
    const dataSearch = {dataTitle, dataCategory}
    dispatch(searchByTitle(dataSearch))
    setDataTitle("")
  };

  const onChange = (e) => {
    setDataCategory(e.target.value)
    dispatch(getNewsByCategory(e.target.value))
  };

  useEffect(() => {
    dispatch(getCategories())
  },[])

const mapCategories = categories.map((element,i) => (<Radio.Button key={i} value={element}>{element.charAt(0).toUpperCase() + element.slice(1)}</Radio.Button>))

  return (
    <>
    <Search
      placeholder="input search news by title"
      onSearch={onSearch}
      value={dataTitle}
      onChange={(e) => setDataTitle(e.target.value)}
      style={{
        width: 300,
      }}
    />
  <Radio.Group onChange={onChange} defaultValue="allcategories">
    <Radio.Button value="allcategories">AllCategories</Radio.Button>
      {mapCategories}
  </Radio.Group>
  </>
  )
}

export default Sidebar