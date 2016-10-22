import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// route components
import App from '../../ui/react/materialui/App.jsx';

// layouts
import BaseLayout from '../../ui/react/materialui/layouts/BaseLayout.jsx';
import LoginLayout from '../../ui/react/materialui/layouts/LoginLayout.jsx';

import Dashboard from '../../ui/react/materialui/pages/Dashboard.jsx';
import Todos from '../../ui/react/materialui/pages/Todos.jsx';
import Profile from '../../ui/react/materialui/pages/Profile.jsx';

import { Accounts } from '../../ui/react/materialui/components/Accounts';


export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>

      <Route component={BaseLayout}>
        <Route path="dashboard" component={Dashboard}/>        
        <Route path="todos" component={Todos}/>
        <Route path="profile" component={Profile}/>

      </Route>
    	<Route component={LoginLayout}>
      	<Route path="login" component={Accounts.ui.LoginForm}/>
      </Route>
    </Route>
  </Router>
);

/*
      <Route path="lists/:id" component={ListPageContainer}/>
      <Route path="signin" component={AuthPageSignIn}/>      
      <Route path="*" component={NotFoundPage}/>
*/