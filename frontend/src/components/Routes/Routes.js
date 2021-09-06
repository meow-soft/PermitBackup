import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const Routes = () => {
  return (
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
  );
};

export default Routes;
