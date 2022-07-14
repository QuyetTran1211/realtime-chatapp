import React, { useMemo, useState } from 'react';
import { Form, Select, Modal, Spin, Avatar } from 'antd';
import { AppContext } from '../Context/AppProvider';
import { addDocument } from '../../firebase/services';
import { AuthContext } from '../Context/AuthProvider';
import { debounce } from 'lodash';

function DebounceSelect({ fetchOptions, deboundTimeout = 300, ...props }) {
  const [fetching, setFetching] = useState(false);
  const [options, setOptions] = useState([]);

  const debounceFetcher = useMemo(() => {
    const loadOptions = (value) => {
      setOptions([]);
      setFetching(true);

      fetchOptions(value).then((newOptions) => {
        setOptions(newOptions);
        setFetching(false);
      });
    };
    return debounce(loadOptions, deboundTimeout);
  }, [deboundTimeout, fetchOptions]);
  return (
    <Select
      labelInValue
      onSearch={debounceFetcher}
      notFoundContent={fetching ? <Spin size="small" /> : null}
      {...props}
    >
      {
        // [{ label: , value: , photoURL}]
        options.map((opt) => (
          <Select.Option>
            <Avatar size="small" src={opt.photoURL}>
              {opt.photoURL ? '' : opt.label?.charAt(0)?.toUpperCase()}
            </Avatar>
            {`${opt.label}`}
          </Select.Option>
        ))
      }
    </Select>
  );
}

const fethUserList = async () => {};

export default function InviteMemberModal() {
  const { isInviteMemberVisible, setIsInviteMemberVisible } =
    React.useContext(AppContext);
  const {
    user: { uid }
  } = React.useContext(AuthContext);
  const [form] = Form.useForm();

  const [value, setValue] = useState([]);

  const handleOk = () => {
    // Reset form value
    form.resetFields();

    setIsInviteMemberVisible(false);
  };

  const handleCancel = () => {
    // Reset form value
    form.resetFields();

    setIsInviteMemberVisible(false);
  };

  return (
    <Modal
      title="Mời thêm thành viên"
      visible={isInviteMemberVisible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Form form={form} layout="vertical">
        <DebounceSelect
          mode="multiple"
          label="Tên thành viên"
          value={value}
          placeholder="Nhập tên thành viên"
          fetchOptions={fethUserList}
          onChange={(newValue) => setValue(newValue)}
          style={{ width: '100%' }}
        />
      </Form>
    </Modal>
  );
}
