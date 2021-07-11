import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './component/login/login';
import fire from './fire';
import React, { useState, useEffect } from 'react';
import Dashboard from './component/dashboard/dashboard';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './PrivateRoute';
import ForgotPassword from './component/forgot-password/ForgotPassword';

function App() {

  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/forgot-password" component={ForgotPassword} />
        </Switch>
      </AuthProvider>  
    </Router>
  );
}

export default App;
