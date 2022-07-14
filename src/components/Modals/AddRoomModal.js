import React from 'react';
import { Form, Input, Modal } from 'antd';
import { AppContext } from '../Context/AppProvider';
import { addDocument } from '../../firebase/services';
import { AuthContext } from '../Context/AuthProvider';

export default function AddRoomModal() {
  const { isAddRoomVisible, setIsAddRoomVisible } =
    React.useContext(AppContext);
  const {
    user: { uid }
  } = React.useContext(AuthContext);
  const [form] = Form.useForm();

  const handleOk = () => {
    //handle logic
    // add new room to firestore
    console.log({ formData: JSON.stringify(form.getFieldsValue()) });
    addDocument('rooms', { ...form.getFieldValue(), members: [uid] });

    // Reset form value
    form.resetFields();

    setIsAddRoomVisible(false);
  };

  const handleCancel = () => {
    // Reset form value
    form.resetFields();

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
        <Form.Item label="Mô tả" name="description">
          <Input.TextArea placeholder="Nhập mô tả" />
        </Form.Item>
      </Form>
    </Modal>
  );
}
