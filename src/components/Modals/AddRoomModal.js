import React from 'react';
import { Form, Input, Modal } from 'antd';
import { AppContext } from '../Context/AppProvider';

export default function AddRoomModal() {
  const { isAddRoomVisible, setIsAddRoomVisible } =
    React.useContext(AppContext);
  const { form } = Form.useForm();

  const handleOk = () => {
    //handle logic
    // add new room to firestore
    console.log({ formData: form.getFieldsValue() });

    setIsAddRoomVisible(false);
  };

  const handleCancel = () => {
    setIsAddRoomVisible(false);
  };

  return (
    <Modal
      title="Tạo phòng"
      visible={isAddRoomVisible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Form form={form} layout="vertical">
        <Form.Item label="Tên phòng" name="name">
          <Input placeholder="Nhập tên phòng" />
        </Form.Item>
        <Form.Item label="Mô tả" name="name">
          <Input.TextArea placeholder="Nhập mô tả" />
        </Form.Item>
      </Form>
    </Modal>
  );
}
