import React from 'react';
import { Card, Layout, Row } from 'antd';
import LoginForm from '../../components/LoginForm/LoginForm';
import styles from './Login.module.scss';

const Login = () => {
  return (
    <Layout>
      <Row align="middle" justify="center" className={styles.login}>
        <Card>
          <LoginForm />
        </Card>
      </Row>
    </Layout>
  );
};

export default Login;
