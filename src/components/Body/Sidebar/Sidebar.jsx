import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { getCategories } from '../../../features/news/newsSlice'
import { Radio, Input } from 'antd';
const { Search } = Input

function Sidebar() {

  const onSearch = (value) => console.log(value);

  const onChange = (e) => {
    console.log(`radio checked:${e.target.value}`);
  };

  const dispatch = useDispatch()
  const { categories } = useSelector( state => state.news )

  useEffect(() => {
    // dispatch(getCategories())
  },[])

  return (
    <>
    <Search
      placeholder="input search news by title"
      onSearch={onSearch}
      style={{
        width: 300,
      }}
    />
  <Radio.Group onChange={onChange} defaultValue="allcategories">
    <Radio.Button value="allcategories">AllCategories</Radio.Button>
    <Radio.Button value="a">Hangzhou</Radio.Button>
    <Radio.Button value="b">Shanghai</Radio.Button>
    <Radio.Button value="c">Beijing</Radio.Button>
    <Radio.Button value="d">Chengdu</Radio.Button>
  </Radio.Group>
  </>
  )
}

export default Sidebar