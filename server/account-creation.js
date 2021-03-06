import {Meteor} from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
 
export default () => {
 
  Accounts.onCreateUser((options, user) => {
 
    user.profile = options.profile ? options.profile : {};
    user.admin = options.admin;
 
    // send verification mail
    // Meteor.setTimeout(function() {
    //   Accounts.sendVerificationEmail(user._id);
    // }, 2 * 1000);
 
    //Basic Role Set Up
    user.roles = ["User"];

    return user;
  });
}