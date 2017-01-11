import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import traderjs from 'traderjs';


Meteor.methods({
  'stockdata'(symbol){

    check(symbol, String);

    // Make sure the user is logged in before inserting a task
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }


    // load Future
    Future = Npm.require('fibers/future');
    var future = new Future();

    var configuration = {
        symbol: symbol,
        interval: 86400,
        period: '2d',
        fields: ['d','o','c','l','h','v']
    };

    traderjs
      .config(configuration)
      .transformer('json')
      .temporal(function(data) {
        future.return(data);
      });



    return future.wait();
  }
});
