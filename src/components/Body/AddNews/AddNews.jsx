import { Button, Modal } from 'antd';
import { useState } from 'react';
import FormNews from './FormNews/FormNews'

function AddNews() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add a News
      </Button>
      <Modal title="Add one news" open={isModalOpen} onCancel={handleCancel} footer={null} destroyOnClose={true}>
        <FormNews setIsModalOpen={setIsModalOpen}/>
      </Modal>
    </>
  )
}

export default AddNews