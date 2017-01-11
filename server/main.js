import '../imports/api/tasks.js';
import '../imports/api/stocks.js';

import { Meteor } from 'meteor/meteor';
/*
WebApp.connectHandlers.use(function(req, res, next) {
  // add allow origin
  res.setHeader('Access-Control-Allow-Origin', '*');

  // add headers
  res.setHeader('Access-Control-Allow-Headers', [
      'Accept',
      'Accept-Charset',
      'Accept-Encoding',
      'Accept-Language',
      'Accept-Datetime',
      'Authorization',
      'Cache-Control',
      'Connection',
      'Cookie',
      'Content-Length',
      'Content-MD5',
      'Content-Type',
      'Date',
      'User-Agent',
      'X-Requested-With',
      'Origin'
  ].join(', '));
});*/

Meteor.startup(() => {
  // code to run on server at startup
});
