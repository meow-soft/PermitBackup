import React from 'react';
import { Layout, Row } from 'antd';
import LoginForm from '../../components/LoginForm/LoginForm';
import styles from './Login.module.scss';

const Login = () => {
  return (
    <Layout>
      <Row align="middle" justify="center" className={styles.login}>
        <LoginForm />
      </Row>
    </Layout>
  );
};

export default Login;
