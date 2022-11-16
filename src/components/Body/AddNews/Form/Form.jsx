import './Form.css'
import { Input, Button, Select} from "antd";
const {  Option } = Select
const { TextArea } = Input;

function Form({setIsModalOpen}) {

    console.log(`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`)

    let prueba

    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        console.log(e.target.title.value)
        console.log(prueba);
        console.log(e.target.image.files[0]);
        console.log(e.target.content.value);
        setIsModalOpen(false)
      };

    const handleChange = (value) => {
        prueba = value
      }; 

  return (
    <form onSubmit={onSubmit}>
        <div className='elementForm'>
        <label htmlFor="title">Title:</label>
        <Input type="text" name="title" required />
        </div>
        <div className='elementForm'>
        <label htmlFor="author">Author:</label>
        <Input type="text" name="author" required />
        </div>
        <div className='elementForm'>
        <Select
            onChange={handleChange}
            defaultValue="lucy"
            style={{width: 120}}
            allowClear
            options={[
                {
                value: 'lucy',
                label: 'Lucy',
                },
                {
                value: 'Ger',
                label: 'Ger',
                },
            ]}
            />
        </div>
        <div className='elementForm'>
        <label htmlFor="description">Description:</label>
        <Input type="text" name="description" required />
        </div>
        <div className='elementForm'>
        <label htmlFor="content">Content:</label>
        <TextArea name='content' placeholder="minLength is 30" minLength={30} style={{ height: 120, resize: 'none' }} required/>
        </div>
        <div className='elementForm'>
        <input type="file" name='image' />
        </div>

        <div className='elementForm'>
        <Button type="primary" htmlType="submit">Submit</Button>
        </div>
      </form>
  )
}

export default Form