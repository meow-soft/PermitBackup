import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Downloads from '../Downloads/Downloads';
import Home from '../Home/Home';
import Servers from '../Servers/Servers';
import styles from './Page.module.scss';

const Page = () => {
  return (
    <section className={styles.page}>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route path="/home" component={Home} />
        <Route path="/downloads" component={Downloads} />
        <Route path="/servers" component={Servers} />
      </Switch>
    </section>
  );
};

export default Page;
