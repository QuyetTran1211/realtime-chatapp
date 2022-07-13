import './App.css';
import Login from './components/Login';
import ChatRoom from './components/ChatRoom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AuthProvider from './components/Context/AuthProvider';

import React from 'react';

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route component={ChatRoom} patch="/" />
          <Route component={Login} patch="/login" />
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}
