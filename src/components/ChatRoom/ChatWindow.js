import React from 'react';
import styled from 'styled-components';
import { Avatar, Button, Form, Input, Tooltip } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';
import Message from './Message';

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  height: 56px;
  padding: 0 16px;
  align-tems: center;
  border-bottom: 1px solid rgb(230, 230, 230);

  .header {
    &__info {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    &__title {
      margin: 0;
      font-weight: bold;
    }

    &__description {
      font-size: 12px;
    }
  }
`;

const ButtonGroupStyled = styled.div`
  display: flex;
  align-items: center;
`;

const WrapperStyled = styled.div`
  height: 100vh;
`;

const ContentStyled = styled.div`
  height: calc(100% - 56px);
  display: flex;
  flex-direction: column;
  padding: 11px;
  justify-content: flex-end;
`;

const FormStyled = styled(Form)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 2px 2px 0;
  border: 1px solid rgb( 230, 230, 230)
  border-radius: 2px;

  .ant-form-item {
    flex: 1;
    margin-bottom: 0;
  }
`;

const MessageListStyled = styled.div`
  max-height: 100%;
  overflow-y: auto;
`;

export default function ChatWindow() {
  return (
    <WrapperStyled>
      <HeaderStyled>
        <div className="header__info">
          <p className="header__title">Room 1</p>
          <span className="header__description">Đây là room 1</span>
        </div>
        <ButtonGroupStyled>
          <div>
            <Button icon={<UserAddOutlined />} type="text">
              Mời
            </Button>
            <Avatar.Group size="small" maxCount={2}>
              <Tooltip title="A">
                <Avatar>A</Avatar>
              </Tooltip>
              <Tooltip title="A">
                <Avatar>b</Avatar>
              </Tooltip>
              <Tooltip title="A">
                <Avatar>c</Avatar>
              </Tooltip>
              <Tooltip title="A">
                <Avatar>d</Avatar>
              </Tooltip>
            </Avatar.Group>
          </div>
        </ButtonGroupStyled>
      </HeaderStyled>
      <ContentStyled>
        <MessageListStyled>
          <Message
            text="Test"
            photoURL={null}
            displayName="Quyet"
            createAt={1212123123213}
          />
          <Message
            text="Test"
            photoURL={null}
            displayName="Quyet"
            createAt={1212123123213}
          />
          <Message
            text="Test"
            photoURL={null}
            displayName="Quyet"
            createAt={1212123123213}
          />
          <Message
            text="Test"
            photoURL={null}
            displayName="Quyet"
            createAt={1212123123213}
          />
        </MessageListStyled>
        <FormStyled>
          <Form.Item>
            <Input
              placeholder="Nhập tin nhắn ..."
              bordered={false}
              autoComplete="off"
            />
          </Form.Item>
          <Button type="primary">Gửi</Button>
        </FormStyled>
      </ContentStyled>
    </WrapperStyled>
  );
}
