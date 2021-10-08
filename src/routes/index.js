import React from 'react';
import { View } from 'react-native';
import { NativeRouter, Switch, Route } from 'react-router-native';

import Login from '~/pages/Login';
import Register from '~/pages/Register';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import ManageEntry from '~/pages/ManageEntries';

// import { Container } from './styles';

export default function Routes() {
  return (
    <NativeRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/home" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/cashIn" component={ManageEntry} />
        <Route path="/cashOut" component={ManageEntry} />
      </Switch>
    </NativeRouter>);
}
