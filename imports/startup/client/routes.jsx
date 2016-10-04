import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// route components
import App from '../../ui/react/material/App.jsx';
import BaseLayout from '../../ui/react/material/layouts/BaseLayout.jsx';
import LoginPage from '../../ui/react/material/pages/LoginPage.jsx';


export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    	<Route component={BaseLayout}>
      	<Route path="login" component={LoginPage}/>
      </Route>
    </Route>
  </Router>
);

/*
      <Route path="lists/:id" component={ListPageContainer}/>
      <Route path="signin" component={AuthPageSignIn}/>      
      <Route path="*" component={NotFoundPage}/>
*/