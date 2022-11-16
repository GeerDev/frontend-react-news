import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createNews} from '../../../../features/news/newsSlice'
import { useNavigate } from "react-router-dom";
import './FormNews.css'
import { Input, Button, Select, Form, Upload } from "antd";
import { PlusOutlined } from '@ant-design/icons';
const { TextArea } = Input;

function FormNews({setIsModalOpen}) {

    const dispatch = useDispatch()
    const { categories, errorMessage } = useSelector( state => state.news )

    const navigate = useNavigate();

    const [keywords, setKeywords] = useState([])
    const [inputKeywords, setInputKeywords] = useState("")
    const [image, setImage] = useState([]);

    const [form] = Form.useForm();

    const onFinish = async (values) => {
        const {author, category, content, description, link, title} = values
        const formData = new FormData();
        if (image[0]) formData.set('imageNews', image[0]);
        if (title !== undefined) formData.set('title', title)
        formData.set('link', `http://${link}`)
        formData.set('author', [author])
        formData.set('category', category)
        if (description !== undefined) formData.set('description', description)
        if (content !== undefined) formData.set('content', content)
        formData.set('date', `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`)
        keywords.forEach(element => formData.append('keywords', element))
        await dispatch(createNews(formData))
        if(document.querySelector(".errors").innerHTML) return
        setKeywords([]);
        navigate("/news")
        setIsModalOpen(false)
        form.resetFields();
      };

    const addKeyword = () => {
        const oneKeyword = document.getElementById("keywords")
        setKeywords(pre => [...pre, oneKeyword.value ])
        setInputKeywords("")
    } 

    const beforeUpload = (file) => {
      setImage([file])
      return false; 
    } 

  return (
    <Form onFinish={onFinish} form={form}>

        <Form.Item
        label="Title"
        name="title"
        // rules={[{ required: true, message: 'Please enter a title!' }]}
        >
        <Input type="text"/>
        </Form.Item>
        <Form.Item
        label="Link"
        name="link"
        rules={[{ required: true, message: 'Please enter a link!' }]}
        >
        <Input addonBefore="http://"/>
        </Form.Item>
        <Form.Item
        label="Author"
        name="author"
        rules={[{ required: true, message: 'Please enter a author!' }]}
        >
        <Input type="text"/>
        </Form.Item>
        <Form.Item
        label="Category"
        name="category"
        >
        <Select
            style={{width: 120}}
            options={categories.map(element => ({value:element, label:element}))}/>
        </Form.Item>
        <Form.Item
        label="Description"
        name="description"
        // rules={[{ required: true, message: 'Please enter a description!' }]}
        >
        <Input type="text"/>
        </Form.Item>
        <Form.Item
        label="Content"
        name="content"
        // rules={[{ required: true, message: 'Please enter a content!' }]}
        >
        <TextArea style={{ height: 120, resize: 'none' }}/>
        </Form.Item>
        <Form.Item label="Upload" valuePropName="fileList">
          <Upload listType="picture-card" beforeUpload={beforeUpload} defaultFileList={[]}>
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item
        label="Keywords"
        name="keywords"
        >
        <Input.Group compact>
            <Input style={{width: 'calc(100% - 200px)'}} id='keywords'onChange={(e) => setInputKeywords(e.target.value)} value={inputKeywords}/>
            <Button type="primary" onClick={addKeyword}>Add Keyword</Button>
        </Input.Group>
        </Form.Item>
        <div>
        {keywords.map((element,i) => <span key = {i}>#{element} </span>)}
        </div>

        <div className='elementForm'>
        <Button type="primary" htmlType="submit">Submit</Button>
        <span className='errors'>{errorMessage}</span>
        </div>
      </Form>
  )
}

export default FormNews