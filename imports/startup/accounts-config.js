import { Accounts } from 'meteor/accounts-base';
import { browserHistory } from 'react-router';

 
Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY',
  minimumPasswordLength: 3,
  onSignedInHook: () => browserHistory.push('/dashboard'), 
  onSignedOutHook: () => browserHistory.push('/login')
});

/*
Accounts.config({
  sendVerificationEmail: true,
  forbidClientAccountCreation: false
});*/
