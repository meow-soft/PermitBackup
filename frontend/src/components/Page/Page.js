import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Downloads from '../Downloads/Downloads';
import Home from '../Home/Home';
import Notifications from '../Notifications/Notifications';
import Scheduler from '../Scheduler/Scheduler';
import Servers from '../Servers/Servers';
import Settings from '../Settings/Settings';
import User from '../User/User';
import styles from './Page.module.scss';

const Page = () => {
  return (
    <section className={styles.page}>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/downloads" component={Downloads} />
        <Route path="/scheduler" component={Scheduler} />
        <Route path="/servers" component={Servers} />
        <Route path="/user" component={User} />
        <Route path="/notifications" component={Notifications} />
        <Route path="/settings" component={Settings} />
        <Redirect to="/home" />
      </Switch>
    </section>
  );
};

export default Page;
