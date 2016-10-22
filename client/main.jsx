
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import '/imports/startup/accounts-config.js';
import { renderRoutes } from '/imports/startup/client/routes.jsx';

Meteor.startup(() => {
  render(renderRoutes(), document.getElementById('render-target'));
});


/*

import App from '/imports/ui/react/materialui/App.jsx';
 
Meteor.startup(() => {
	console.log(document.getElementById('render-target'));
  render(<App />, document.getElementById('render-target'));
});*/