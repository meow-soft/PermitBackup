import React from 'react';
import { Form, Input, Button } from 'antd';
import styles from './LoginForm.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';

const LoginForm = () => {
  return (
    <Form className={styles.loginForm}>
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input
          prefix={<FontAwesomeIcon icon={faUser} />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<FontAwesomeIcon icon={faLock} />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className={styles.loginForm__button}
        >
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
