import { Button, Modal } from 'antd';
import { useState } from 'react';
import Form from './Form/Form'

function AddNews() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add a News
      </Button>
      <Modal title="Add one news" open={isModalOpen} closable={false} footer={null}>
        <Form setIsModalOpen={setIsModalOpen}/>
      </Modal>
    </>
  )
}

export default AddNews