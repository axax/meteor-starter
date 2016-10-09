import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// route components
import App from '../../ui/react/materialui/App.jsx';

// layouts
import BaseLayout from '../../ui/react/materialui/layouts/BaseLayout.jsx';
import PlainLayout from '../../ui/react/materialui/layouts/PlainLayout.jsx';

//import LoginPage from '../../ui/react/materialui/pages/LoginPage.jsx';

import { Accounts } from '../../ui/react/materialui/components/Accounts';


export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    	<Route component={BaseLayout}>
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